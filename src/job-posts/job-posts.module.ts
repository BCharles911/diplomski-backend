import { Module } from '@nestjs/common';
import { JobPostsService } from './job-posts.service';
import { JobPostsController } from './job-posts.controller';
import { JobPost } from './entities/job-post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JobPost])],
  exports: [TypeOrmModule],
  controllers: [JobPostsController],
  providers: [JobPostsService]
})
export class JobPostsModule {}
