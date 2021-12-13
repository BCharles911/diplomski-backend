import { JobPost } from "src/job-posts/entities/job-post.entity";
import { User } from "src/users/entities/user.entity";
export declare class Request {
    id: string;
    approved: boolean;
    reasonOfRejection: string;
    createTime: string;
    user: User;
    jobPost: JobPost;
}
