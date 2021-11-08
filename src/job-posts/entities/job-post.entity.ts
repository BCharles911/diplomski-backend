import { Comment } from "src/comments/entities/comment.entity";
import { Request } from "src/requests/entities/request.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class JobPost {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;




    @Column()
    jobTitle: string;

    @Column()
    jobDescription: string;

    @Column("double")
    priceOfHour: number;

    @Column()
    numberOfHours: number;

    @Column()
    addressOfJob: string;

    @Column()
    fixedPrice: boolean;

    @Column()
    fixedPriceValue: number;

    @Column()
    startDate: Date;

    @Column()
    numberOfPeople: number;

    @Column({
        nullable: false,
        select: false
    })
    spotsFilled: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createTime: string;

    @OneToMany(() => Comment, comment => comment.jobPost)
    comments: Comment[];

    @ManyToOne(() => User, user => user.jobPosts)
    user: User;


    @OneToMany(() => Request, request => request.jobPost)
    requests: Request[];

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @Column()
    deleted:boolean;

}