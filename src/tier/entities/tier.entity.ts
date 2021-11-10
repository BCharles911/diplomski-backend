import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TierLevel {
    BRONZE = 'bronze',
    SILVER = 'silver',
    GOLD = 'gold',
    PLATINUM = 'platinum'
  }
  

@Entity()
export class Tier {

     constructor(numberOfReviews, averageRating) {
       this.numberOfReviews = numberOfReviews;
       this.averageRating = averageRating;
     }


    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({
        type: 'enum',
        enum: TierLevel,
        default: TierLevel.BRONZE,
      })
      tierName: TierLevel;

    @Column()
    numberOfReviews: number;

    @Column("float")
    averageRating: number;




}
