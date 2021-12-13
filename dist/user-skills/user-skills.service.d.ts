import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';
export declare class UserSkillsService {
    create(createUserSkillDto: CreateUserSkillDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserSkillDto: UpdateUserSkillDto): string;
    remove(id: number): string;
}
