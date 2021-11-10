import { Skill } from "src/skills/entities/skill.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobPost } from "./job-post.entity";


@Entity()
export class JobPostSkills {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => JobPost, jobPost => jobPost.jobPostSkills, {primary: true })
    jobPost: JobPost;


    @ManyToOne(() => Skill, skill => skill.jobPostSkills, {primary: true })
    skill: Skill;
}