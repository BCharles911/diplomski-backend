import { City } from "./city.entity";
import { TierLevel, UserRole } from "./user.entity";
export interface UserI {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    email?: string;
    password?: string;
    tierLevel?: TierLevel;
    phoneNumber?: string;
    role?: UserRole;
    city?: City;
}
