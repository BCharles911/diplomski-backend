import { Skill } from "src/skills/entities/skill.entity";
import { User } from "src/users/entities/user.entity";
export declare class UserSkill {
    id: string;
    skill: Skill;
    user: User;
    skillLevel: number;
}
