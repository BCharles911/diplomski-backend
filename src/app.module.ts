import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JobPostsModule } from './job-posts/job-posts.module';
import { User } from './users/entities/user.entity';
import { JobPost } from './job-posts/entities/job-post.entity';
import { SkillsModule } from './skills/skills.module';
import { UserSkillsModule } from './user-skills/user-skills.module';
import { UserSkill } from './user-skills/entities/user-skill.entity';
import { Skill } from './skills/entities/skill.entity';
import { RequestsModule } from './requests/requests.module';
import { Request } from './requests/entities/request.entity';
import { UserReviewsModule } from './user-reviews/user-reviews.module';
import { UserReview } from './user-reviews/entities/user-review.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JobPostSkills } from './job-posts/entities/job-post-skills.entity';
import { City } from './users/entities/city.entity';
import { Rank } from './users/entities/rank.entity';



@Module({
  imports: [

    ConfigModule.forRoot( { envFilePath: '.env.development' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: Number.parseInt(process.env.MYSQL_DB_PORT),
      username: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASS,
      database: process.env.MYSQL_DB_NAME,
      entities: [
        User,
        JobPost,
        Skill,
        UserSkill,
        Request,
        UserReview,
        JobPostSkills,
        City,
        Rank
      ],
      synchronize: true,
    }),
    UsersModule,
    JobPostsModule,
    SkillsModule,
    UserSkillsModule,
    RequestsModule,
    UserReviewsModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
