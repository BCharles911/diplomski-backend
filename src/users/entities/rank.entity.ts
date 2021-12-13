import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rank {


  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({type: 'int'})
  minReviews: number;

  @Column({type: 'int'})
  maxReviews: number;

  @Column({type: 'double'})
  minGrade: number;

  @Column({type: 'double'})
  maxGrade: number;
}