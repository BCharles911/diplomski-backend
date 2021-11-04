import { Skill } from "src/skills/entities/skill.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserSkill {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Skill, skill => skill.userSkills, { primary: true })
    skill: Skill;

    @ManyToMany(() => User, user => user.userSkills, { primary: true })
    user: User;

    @Column()
    skillLevel: number;

}
