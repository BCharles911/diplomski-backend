import { IsEmail, IsNotEmpty } from 'class-validator';
import { JobPost } from 'src/job-posts/entities/job-post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee',
}

@Entity()
export class User {
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

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @OneToMany(() => JobPost, jobPost => jobPost.user)
  jobPosts: JobPost[];
}
