import { Module } from '@nestjs/common';
import { UserReviewsService } from './user-reviews.service';
import { UserReviewsController } from './user-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReview } from './entities/user-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserReview])],
  exports: [TypeOrmModule],
  controllers: [UserReviewsController],
  providers: [UserReviewsService]
})
export class UserReviewsModule {}
