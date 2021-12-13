import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersHelperService } from './service/users-helper/users-helper.service';
import { UsersService } from './service/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigService } from '@nestjs/config';
import { City } from './entities/city.entity';
import { RankService } from './service/rank/rank.service';
import { Rank } from './entities/rank.entity';
import { CityService } from './service/city/city.service';
import { JobPostsModule } from 'src/job-posts/job-posts.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, City, Rank,]),
  forwardRef(() => JobPostsModule),
  AuthModule,
  

  ],
  exports: [TypeOrmModule, UsersService],
  controllers: [UsersController],
  providers: [UsersService, RankService, UsersHelperService, ConfigService, RankService, CityService]
})
export class UsersModule {}
