import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable, of, switchMap } from 'rxjs';
import { UserI } from './entities/user.interface';
import { UsersService } from './service/users.service';
import { UsersHelperService } from './service/users-helper/users-helper.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginResponseI } from './entities/login-response.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from './entities/user.entity';
import { RankService } from './service/rank/rank.service';
import { Rank } from './entities/rank.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private userHelperService: UsersHelperService,
    private readonly rankService: RankService) {}



  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<UserI> {
    console.log(createUserDto)
    return this.userHelperService.createUserDtoToEntity(createUserDto).pipe(
      switchMap((user: UserI) => this.usersService.create(user).catch(err =>  {
        throw new HttpException({
          message: err.message
        }, HttpStatus.CONFLICT)
      }))
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('list') limit: number = 10
  ): Observable<Pagination<UserI>> {
    limit = limit > 100 ? 100: limit;
    return this.usersService.findAll({page, limit, route: 'http://localhost:3000/api/users'})

  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseI> {
    const userEntity: UserI = this.userHelperService.loginuserDtoToEntity(loginUserDto);
    const jwt: string = await this.usersService.login(userEntity);
    const user = await this.userHelperService.findByEmail(loginUserDto.email);
    return {
        access_token: jwt,
        token_type: 'JWT',
        expires_in: 10000,
        user: user
        
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('sta')
    return this.usersService.remove(id);
  }


  @Post('create-ranks')
  async createRanks(): Promise<void>{
    this.rankService.populateRank();
  }

  @Get('get-grade/:rank_id')
  async getGrade(@Param('rank_id') rank_id: string): Promise<Rank>{
    let grade = await this.rankService.getMinGrade(rank_id);
    console.log(grade)
    return grade;
  }
}
