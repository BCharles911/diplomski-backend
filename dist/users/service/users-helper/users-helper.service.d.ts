import { Observable } from 'rxjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { User, UserRole } from 'src/users/entities/user.entity';
import { UserI } from 'src/users/entities/user.interface';
import { Repository } from 'typeorm';
export declare class UsersHelperService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    roleChoice: UserRole;
    createUserDtoToEntity(createUserDto: CreateUserDto): Observable<UserI>;
    capitalizeFirstLetter(string: any): string;
    findByEmail(email: string): Promise<User | undefined>;
    loginuserDtoToEntity(loginUserDto: LoginUserDto): UserI;
}
