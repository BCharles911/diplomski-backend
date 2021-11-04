import { UserSkill } from "src/user-skills/entities/user-skill.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    skillName: string;


    @OneToMany(() => UserSkill, userSkill => userSkill.skill)
    userSkills: UserSkill[];


}
