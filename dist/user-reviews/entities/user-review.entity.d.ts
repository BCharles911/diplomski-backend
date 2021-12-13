import { User } from "src/users/entities/user.entity";
export declare class UserReview {
    id: string;
    rating: number;
    comment: string;
    createTime: string;
    reviewerName: string;
    user: User;
}
