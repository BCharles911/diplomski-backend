import { Request } from "src/requests/entities/request.entity";
import { User } from "src/users/entities/user.entity";
import { JobPostSkills } from "./job-post-skills.entity";
export declare class JobPost {
    id: string;
    jobTitle: string;
    jobDescription: string;
    priceOfHour: number;
    numberOfHours: number;
    addressOfJob: string;
    startTime: string;
    fixedPrice: boolean;
    fixedPriceValue: number;
    startDate: Date;
    numberOfPeople: number;
    spotsFilled: boolean;
    createTime: string;
    user: User;
    requests: Request[];
    jobPostSkills: JobPostSkills[];
    users: User[];
    deleted: boolean;
    finished: boolean;
}
