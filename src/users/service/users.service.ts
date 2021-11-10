import {
  HttpException,
  HttpStatus,
  Injectable
} from '@nestjs/common';
import {
  InjectRepository
} from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination
} from 'nestjs-typeorm-paginate';
import {
  from,
  map,
  Observable,
  switchMap
} from 'rxjs';
import { AuthService } from 'src/auth/services/auth/auth.service';
import {
  Tier
} from 'src/tier/entities/tier.entity';
import {
  TierService
} from 'src/tier/tier.service';
import {
  Repository
} from 'typeorm';
import {
  CreateUserDto
} from '../dto/create-user.dto';
import {
  UpdateUserDto
} from '../dto/update-user.dto';
import {
  User
} from '../entities/user.entity';
import {
  UserI
} from '../entities/user.interface';


const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository < User > , private tierService: TierService,
    @InjectRepository(Tier) private readonly tierRepository: Repository < Tier >, private authService: AuthService,
  ) {

  }
  async create(newUser: UserI): Promise<UserI> {
    try {
      const exists: boolean = await this.mailExists(newUser.email);
      if (!exists) {
        const passwordHash: string = await this.hashPassword(newUser.password);
        newUser.password = passwordHash;
        const user = await this.userRepository.save(this.userRepository.create(newUser));
        return this.findOne(user.id);
      } else {
        throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
      }
    } catch {
      throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
    }
  }





  private hashPassword(password: string): Promise < string > {
    return this.authService.hashPassword(password);
  }


  private async findOne(id: string): Promise<UserI> {
    return this.userRepository.findOne({ id });
  }

  public getOne(id: string): Promise<UserI> {
    return this.userRepository.findOneOrFail({ id });
  }

  private async mailExists(email: string): Promise < boolean > {
    const user = await this.userRepository.findOne({
      email
    });
    if (user) {
      return true;
    } else {
      return false;
    }
  }


  findAll(options: IPaginationOptions): Observable < Pagination < UserI >> {
    return from(paginate < User > (this.userRepository, options));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    console.log('aaa')
    return `This action removes a #${id} user`;
  }

  private async findByEmail(email: string): Promise < UserI > {
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