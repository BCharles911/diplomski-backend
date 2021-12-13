import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'rxjs';
import { UserI } from './entities/user.interface';
import { UsersService } from './service/users.service';
import { UsersHelperService } from './service/users-helper/users-helper.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginResponseI } from './entities/login-response.interface';
import { RankService } from './service/rank/rank.service';
import { Rank } from './entities/rank.entity';
export declare class UsersController {
    private readonly usersService;
    private userHelperService;
    private readonly rankService;
    constructor(usersService: UsersService, userHelperService: UsersHelperService, rankService: RankService);
    create(createUserDto: CreateUserDto): Observable<UserI>;
    findAll(page?: number, limit?: number): Observable<Pagination<UserI>>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    login(loginUserDto: LoginUserDto): Promise<LoginResponseI>;
    remove(id: string): string;
    createRanks(): Promise<void>;
    getGrade(rank_id: string): Promise<Rank>;
}
