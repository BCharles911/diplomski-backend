import { UserReviewsService } from './user-reviews.service';
import { CreateUserReviewDto } from './dto/create-user-review.dto';
import { UpdateUserReviewDto } from './dto/update-user-review.dto';
export declare class UserReviewsController {
    private readonly userReviewsService;
    constructor(userReviewsService: UserReviewsService);
    create(createUserReviewDto: CreateUserReviewDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserReviewDto: UpdateUserReviewDto): string;
    remove(id: string): string;
}
