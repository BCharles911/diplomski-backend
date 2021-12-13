import { Skill } from "src/skills/entities/skill.entity";
import { JobPost } from "./job-post.entity";
export declare enum SkillLevel {
    BEGGINER = "begginer",
    ADVANCED = "advanced",
    EXPERT = "expert"
}
export declare class JobPostSkills {
    constructor(jobPost: JobPost, skill: Skill, skillLevel?: SkillLevel);
    id: string;
    jobPost: JobPost;
    skill: Skill;
    skillLevel: SkillLevel;
}
