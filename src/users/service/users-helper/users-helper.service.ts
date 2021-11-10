import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UserI } from 'src/users/entities/user.interface';

@Injectable()
export class UsersHelperService {

    createUserDtoToEntity(createUserDto: CreateUserDto): Observable<UserI> {
        const dateOfB = new Date(createUserDto.dateOfBirth);
        return of({
            email: createUserDto.email,
            username: createUserDto.username,
            password: createUserDto.password,
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
            dateOfBirth: new Date(dateOfB),
            phoneNumber: createUserDto.phoneNumber,
        });
    }


    loginuserDtoToEntity(loginUserDto: LoginUserDto): UserI {
        return {
            email: loginUserDto.email,
            password: loginUserDto.password,
        }
    }
}
