import { forwardRef, Module } from '@nestjs/common';
import { JobPostsService } from './job-posts.service';
import { JobPostsController } from './job-posts.controller';
import { JobPost } from './entities/job-post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/service/users.service';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { SkillsModule } from 'src/skills/skills.module';
import { JobPostSkills } from './entities/job-post-skills.entity';


@Module({
  imports: [TypeOrmModule.forFeature([JobPost, User, JobPostSkills]),
  forwardRef(() => UsersModule),
  forwardRef(() => SkillsModule),
  ],

  exports: [TypeOrmModule, JobPostsService],
  controllers: [JobPostsController],
  providers: [JobPostsService]
})
export class JobPostsModule {}
