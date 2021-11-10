import { JobPostSkills } from "src/job-posts/entities/job-post-skills.entity";
import { UserSkill } from "src/user-skills/entities/user-skill.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {

    constructor(skillName: string, userSkills?: UserSkill[]) {
        this.skillName = skillName;
        this.userSkills = userSkills;
    }


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    skillName: string;


    @OneToMany(() => UserSkill, userSkill => userSkill.skill)
    userSkills: UserSkill[];

    @OneToMany(() => JobPostSkills, jobPostSkill => jobPostSkill.skill)
    jobPostSkills: JobPostSkills[];


}
