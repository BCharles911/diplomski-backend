import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private userHelperService: UsersHelperService) {}



  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<UserI> {
    return this.userHelperService.createUserDtoToEntity(createUserDto).pipe(
      switchMap((user: UserI) => this.usersService.create(user))
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
    console.log("jwt: " + jwt)
    return {
      access_token: jwt,
      token_type: 'JWT',
      expires_in: 10000
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('sta')
    return this.usersService.remove(id);
  }
}
