import { User } from "src/users/entities/user.entity";
import { JobPostSkills } from "../entities/job-post-skills.entity";
export declare class CreateJobPostDto {
    jobTitle?: string;
    jobDescription?: string;
    startDate?: Date;
    priceOfHour?: number;
    numberOfHours?: number;
    addressOfJob?: string;
    fixedPrice?: boolean;
    fixedPriceValue?: number;
    numberOfPeople?: number;
    jobPostSkills?: JobPostSkills[];
    startTime?: string;
    user?: User;
}
