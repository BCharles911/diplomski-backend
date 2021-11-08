import { IsEmail, IsNotEmpty } from 'class-validator';
import { Comment } from 'src/comments/entities/comment.entity';
import { JobPost } from 'src/job-posts/entities/job-post.entity';
import { Request } from 'src/requests/entities/request.entity';
import { Tier } from 'src/tier/entities/tier.entity';
import { UserReview } from 'src/user-reviews/entities/user-review.entity';
import { UserSkill } from 'src/user-skills/entities/user-skill.entity';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee',
}

@Entity()
export class User {
    

  constructor(partial: Partial<User>) {
      Object.assign(this, partial);
  }
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
  }

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()


  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @OneToOne(() => Tier)
  @JoinColumn()
  tier: Tier;

  @OneToMany(() => JobPost, jobPost => jobPost.user)
  jobPosts: JobPost[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => Request, request => request.user)
  requests: Request[];

  @OneToMany(() => UserSkill, userSkill => userSkill.user)
  userSkills: UserSkill[];

  @OneToMany(() => UserReview, review => review.user)
  reviews: UserReview[];
}
