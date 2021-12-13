import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";



@Entity()
export class City {

    constructor(zip: string, city: string, county: string, belongsTo: string){
        this.zip = zip;
        this.city = city;
        this.county = county;
        this.belongsTo = belongsTo;
    }

    @PrimaryColumn()
    zip: string

    @Column()
    city: string;

    @Column()
    county: string;
    
    @Column()
    belongsTo: string;

    @OneToMany(() => User, user => user.city)
    users: User[];
}