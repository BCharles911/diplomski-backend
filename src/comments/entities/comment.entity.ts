import { JobPost } from "src/job-posts/entities/job-post.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Comment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("longtext")
    content: string;


    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createTime: string;

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => JobPost, jobPost => jobPost.comments)
    jobPost: JobPost;

    @Column()
    deleted: boolean;


}


