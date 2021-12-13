import { JobPostSkills } from "src/job-posts/entities/job-post-skills.entity";
import { UserSkill } from "src/user-skills/entities/user-skill.entity";
export declare class Skill {
    constructor(skillName: string, userSkills?: UserSkill[]);
    id: string;
    skillName: string;
    userSkills: UserSkill[];
    jobPostSkills: JobPostSkills[];
}
