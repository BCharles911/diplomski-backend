import { User } from "./user.entity";
export declare class City {
    constructor(zip: string, city: string, county: string, belongsTo: string);
    zip: string;
    city: string;
    county: string;
    belongsTo: string;
    users: User[];
}
