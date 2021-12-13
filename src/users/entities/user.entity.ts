import { IsEmail, IsNotEmpty } from 'class-validator';
import { JobPost } from 'src/job-posts/entities/job-post.entity';
import { Request } from 'src/requests/entities/request.entity';
import { UserReview } from 'src/user-reviews/entities/user-review.entity';
import { UserSkill } from 'src/user-skills/entities/user-skill.entity';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee',
}

export enum TierLevel {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum'
}


@Entity()
export class User {
    

  constructor(partial: Partial<User>) {
      Object.assign(this, partial);
  }
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column( {unique: true } )
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  // not gonna select password
  @Column( { select: false, length: 255 })
  password: string;


  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ unique: true })
  phoneNumber: string;


  @Column({
    type: 'enum',
    enum: TierLevel,
    default: TierLevel.BRONZE
  })
  tierLevel: TierLevel;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @OneToMany(() => JobPost, jobPost => jobPost.user)
  jobPosts: JobPost[];


  @OneToMany(() => Request, request => request.user)
  requests: Request[];

  @OneToMany(() => UserSkill, userSkill => userSkill.user)
  userSkills: UserSkill[];

  @OneToMany(() => UserReview, review => review.user)
  reviews: UserReview[];

  @ManyToOne(() => City, city => city.users)
  city: City;
}
