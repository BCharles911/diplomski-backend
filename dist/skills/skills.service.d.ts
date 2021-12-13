import { JobPostsService } from 'src/job-posts/job-posts.service';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
export declare class SkillsService {
    private readonly skillsRepository;
    private readonly jobPostsService;
    constructor(skillsRepository: Repository<Skill>, jobPostsService: JobPostsService);
    createBulk(): Promise<void>;
    create(createSkillDto: CreateSkillDto): string;
    private nameExists;
    findAll(): Promise<Skill[]>;
    getOne(skillName: string): Promise<Skill>;
    getById(id: string): Promise<Skill>;
    update(id: number, updateSkillDto: UpdateSkillDto): string;
    remove(id: number): string;
}
