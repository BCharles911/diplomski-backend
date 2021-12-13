import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { User, UserRole } from 'src/users/entities/user.entity';
import { UserI } from 'src/users/entities/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersHelperService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,) {

    }
    roleChoice = UserRole.EMPLOYEE

    createUserDtoToEntity(createUserDto: CreateUserDto): Observable<UserI> {
        const dateOfB = new Date(createUserDto.dateOfBirth);
       
        if(createUserDto.role == 'employee') {
            this.roleChoice = UserRole.EMPLOYEE
        }else {
             this.roleChoice = UserRole.EMPLOYER
        }

        return of({
            email: createUserDto.email,
            username: createUserDto.username,
            password: createUserDto.password,
            firstName: this.capitalizeFirstLetter(createUserDto.firstName),
            lastName:this.capitalizeFirstLetter(createUserDto.lastName),
            dateOfBirth: new Date(dateOfB),
            phoneNumber: createUserDto.phoneNumber,
            role: this.roleChoice,
            city: createUserDto.city,
            tierLevel: createUserDto.tierLevel
        });
    }

    capitalizeFirstLetter(string): string {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }


    findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ email }); 
    }
    loginuserDtoToEntity(loginUserDto: LoginUserDto): UserI {
        return {
            email: loginUserDto.email,
            password: loginUserDto.password,
        }
    }


}
