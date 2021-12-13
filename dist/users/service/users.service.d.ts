import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { JobPostsService } from 'src/job-posts/job-posts.service';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UserI } from '../entities/user.interface';
import { CityService } from './city/city.service';
export declare class UsersService {
    private readonly userRepository;
    private cityService;
    private authService;
    private postService;
    constructor(userRepository: Repository<User>, cityService: CityService, authService: AuthService, postService: JobPostsService);
    create(newUser: UserI): Promise<UserI>;
    private hashPassword;
    findOne(id: string): Promise<User>;
    getOne(id: string): Promise<UserI>;
    private mailExists;
    private usernameExists;
    private phoneNumberExists;
    findAll(options: IPaginationOptions): Observable<Pagination<UserI>>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    private findByEmail;
    login(user: UserI): Promise<string>;
    private validatePassword;
}
