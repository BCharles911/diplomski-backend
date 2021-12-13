import { UserSkillsService } from './user-skills.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';
export declare class UserSkillsController {
    private readonly userSkillsService;
    constructor(userSkillsService: UserSkillsService);
    create(createUserSkillDto: CreateUserSkillDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserSkillDto: UpdateUserSkillDto): string;
    remove(id: string): string;
}
