import { JobPostsService } from './job-posts.service';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
export declare class JobPostsController {
    private readonly jobPostsService;
    constructor(jobPostsService: JobPostsService);
    create(createJobPostDto: CreateJobPostDto, id: string): Promise<void>;
    findAll(): Promise<import("./entities/job-post.entity").JobPost[]>;
    findOne(id: string): string;
    update(id: string, updateJobPostDto: UpdateJobPostDto): string;
    remove(id: string): string;
}
