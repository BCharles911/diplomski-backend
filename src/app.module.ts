import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { JobPostsModule } from './job-posts/job-posts.module';
import { User } from './users/entities/user.entity';
import { JobPost } from './job-posts/entities/job-post.entity';

@Module({
  imports: [
    UsersModule,
    JobPostsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'diplomski',
      entities: [User, JobPost],
      synchronize: true,
    }),
    CommentsModule,
    UsersModule,
    JobPostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
