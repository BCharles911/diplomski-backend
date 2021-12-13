import { JobPost } from 'src/job-posts/entities/job-post.entity';
import { Request } from 'src/requests/entities/request.entity';
import { UserReview } from 'src/user-reviews/entities/user-review.entity';
import { UserSkill } from 'src/user-skills/entities/user-skill.entity';
import { City } from './city.entity';
export declare enum UserRole {
    ADMIN = "admin",
    EMPLOYER = "employer",
    EMPLOYEE = "employee"
}
export declare enum TierLevel {
    BRONZE = "bronze",
    SILVER = "silver",
    GOLD = "gold",
    PLATINUM = "platinum"
}
export declare class User {
    constructor(partial: Partial<User>);
    id: string;
    email: string;
    username: string;
    password: string;
    emailToLowerCase(): void;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    phoneNumber: string;
    tierLevel: TierLevel;
    role: UserRole;
    jobPosts: JobPost[];
    requests: Request[];
    userSkills: UserSkill[];
    reviews: UserReview[];
    city: City;
}
