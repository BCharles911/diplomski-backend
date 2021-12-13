import { Skill } from 'src/skills/entities/skill.entity';
import { SkillsService } from 'src/skills/skills.service';
import { UsersService } from 'src/users/service/users.service';
import { Repository } from 'typeorm';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
import { JobPostSkills } from './entities/job-post-skills.entity';
import { JobPost } from './entities/job-post.entity';
export declare class JobPostsService {
    private repository;
    private usersService;
    private skillsService;
    private jobPostSkillsRepository;
    skills: Skill[];
    constructor(repository: Repository<JobPost>, usersService: UsersService, skillsService: SkillsService, jobPostSkillsRepository: Repository<JobPostSkills>);
    create(createJobPostDto: CreateJobPostDto, id: string): Promise<void>;
    findAll(): Promise<JobPost[]>;
    findOne(id: number): string;
    update(id: number, updateJobPostDto: UpdateJobPostDto): string;
    remove(id: number): string;
}
