import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tier {


    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column()
    tierName: string;

    @Column()
    numberOfReviews: number;

    @Column("float")
    averageRating: number;




}
