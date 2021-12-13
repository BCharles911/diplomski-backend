import { forwardRef, Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { Skill } from './entities/skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostsModule } from 'src/job-posts/job-posts.module';

@Module({
  imports: [TypeOrmModule.forFeature([Skill]),
  forwardRef(() => JobPostsModule)],
  exports: [TypeOrmModule, SkillsService],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
