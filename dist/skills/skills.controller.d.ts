import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    create(createSkillDto: CreateSkillDto): string;
    createBulk(): Promise<void>;
    findAll(): Promise<import("./entities/skill.entity").Skill[]>;
    findOne(id: string): Promise<import("./entities/skill.entity").Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): string;
    remove(id: string): string;
}
