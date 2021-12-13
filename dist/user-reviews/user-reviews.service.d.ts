import { CreateUserReviewDto } from './dto/create-user-review.dto';
import { UpdateUserReviewDto } from './dto/update-user-review.dto';
export declare class UserReviewsService {
    create(createUserReviewDto: CreateUserReviewDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserReviewDto: UpdateUserReviewDto): string;
    remove(id: number): string;
}
