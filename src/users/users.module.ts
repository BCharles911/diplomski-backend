import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersHelperService } from './service/users-helper/users-helper.service';
import { UsersService } from './service/users.service';
import { TierService } from 'src/tier/tier.service';
import { TierModule } from 'src/tier/tier.module';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  TierModule,
  AuthModule,
  ],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService, UsersHelperService, ConfigService]
})
export class UsersModule {}
