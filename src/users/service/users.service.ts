import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, Observable, } from 'rxjs';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { JobPostsService } from 'src/job-posts/job-posts.service';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UserI } from '../entities/user.interface';
import { CityService } from './city/city.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private cityService: CityService,
    private authService: AuthService,
    @Inject(forwardRef(() => JobPostsService)) private postService: JobPostsService
  ) {

  }
  async create(newUser: UserI): Promise<UserI> {

    try {
      await this.cityService.create(newUser.city).then(city => newUser.city = city)
      console.log(newUser);
      const mailExists: boolean = await this.mailExists(newUser.email);
      const usernameExists: boolean = await this.usernameExists(newUser.username);
      const phoneNumberExists: boolean = await this.phoneNumberExists(newUser.phoneNumber);
      if (!mailExists && !usernameExists && !phoneNumberExists) {
        const passwordHash: string = await this.hashPassword(newUser.password);
        newUser.password = passwordHash;
        await this.userRepository.save(this.userRepository.create(newUser)).catch(err => console.log(err));
        return;
      } else if (mailExists && usernameExists && phoneNumberExists) {
        throw new HttpException('Your email, username and number already exists, check if you alreday created profile!', HttpStatus.CONFLICT);
      } else if (phoneNumberExists) {
        throw new HttpException('Phone number already in use', HttpStatus.CONFLICT);
      }
      else if (usernameExists) {
        throw new HttpException('Username already in use', HttpStatus.CONFLICT);
      } else {
        throw new HttpException('Email is already taken', HttpStatus.CONFLICT);
      }
    } catch (e) {
      throw new HttpException(e, HttpStatus.CONFLICT);
    }
  }


  private hashPassword(password: string): Promise<string> {
    return this.authService.hashPassword(password);
  }


   async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  public getOne(id: string): Promise<UserI> {
    return this.userRepository.findOneOrFail({ id });
  }

  private async mailExists(email: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      email
    });
    if (user) {
      console.log('user exists')
      return true;
    } else {
      console.log('user does not exist')
      return false;
    }
  }

  private async usernameExists(username: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ username });
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  private async phoneNumberExists(phoneNumber: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ phoneNumber });
    if (user) {
      return true;
    } else {
      return false;
    }
  }



  findAll(options: IPaginationOptions): Observable<Pagination<UserI>> {
    return from(paginate<User>(this.userRepository, options));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    console.log('aaa')
    return `This action removes a #${id} user`;
  }

  private async findByEmail(email: string): Promise<UserI> {
    return this.userRepository.findOne({
      email
    }, {
      select: ['id', 'email', 'username', 'password']
    });
  }


  async login(user: UserI): Promise<string> {
    try {
      const foundUser: UserI = await this.findByEmail(user.email.toLowerCase());
      if (foundUser) {
        const matches: boolean = await this.validatePassword(user.password, foundUser.password);
        if (matches) {
          const payload: UserI = await this.findOne(foundUser.id);
          return this.authService.generateJwt(payload);
        } else {
          throw new HttpException('Login was not successfull, wrong credentials', HttpStatus.UNAUTHORIZED);
        }
      } else {
        throw new HttpException('Login was not successfull, wrong credentials', HttpStatus.UNAUTHORIZED);
      }
    } catch {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }


  private async validatePassword(password: string, storedPasswordHash: string): Promise<any> {
    return this.authService.comparePasswords(password, storedPasswordHash);
  }
}