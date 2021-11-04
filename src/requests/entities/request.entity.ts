import { JobPost } from "src/job-posts/entities/job-post.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Request {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    approved: boolean;

    @Column()
    reasonOfRejection: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createTime: string;

    @ManyToOne(() => User, user => user.requests)
    user: User;

    @ManyToOne(() => JobPost, jobPost => jobPost.requests)
    jobPost: JobPost;

}
