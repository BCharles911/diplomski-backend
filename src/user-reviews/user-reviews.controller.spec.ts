import { Test, TestingModule } from '@nestjs/testing';
import { UserReviewsController } from './user-reviews.controller';
import { UserReviewsService } from './user-reviews.service';

describe('UserReviewsController', () => {
  let controller: UserReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReviewsController],
      providers: [UserReviewsService],
    }).compile();

    controller = module.get<UserReviewsController>(UserReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
