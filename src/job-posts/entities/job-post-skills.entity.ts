import { Skill } from "src/skills/entities/skill.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobPost } from "./job-post.entity";


export enum SkillLevel {
    BEGGINER= 'begginer',
    ADVANCED = 'advanced',
    EXPERT = 'expert'
}

@Entity()
export class JobPostSkills {

    constructor(jobPost: JobPost, skill: Skill, skillLevel?: SkillLevel) {
        this.jobPost = jobPost;
        this.skill = skill;
        this.skillLevel = skillLevel
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => JobPost, jobPost => jobPost.jobPostSkills, {primary: true })
    jobPost: JobPost;


    @ManyToOne(() => Skill, skill => skill.jobPostSkills, {primary: true })
    skill: Skill;

    
    @Column({
        type: 'enum',
        enum: SkillLevel,
        default: SkillLevel.BEGGINER
    })
    skillLevel: SkillLevel;
}