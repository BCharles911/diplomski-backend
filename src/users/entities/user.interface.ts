import { Tier } from "src/tier/entities/tier.entity";

export interface UserI {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    email: string;
    password: string;
    tier?: Tier;
    phoneNumber?: string;
}