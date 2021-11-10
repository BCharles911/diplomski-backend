import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class AvailabilityCalendar {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column()
    monday: boolean;

    @Column()
    tuesday: boolean;

    @Column()
    wednesday: boolean;

    @Column()
    thursday: boolean;

    @Column()
    friday: boolean;

    @Column()
    saturday: boolean;


    @Column()
    sunday: boolean;

    @Column()
    hoursFrom: number;

    @Column()
    hoursTo: number;


}
