import { City } from "../entities/city.entity";
import { TierLevel } from "../entities/user.entity";
import { LoginUserDto } from "./login-user.dto";
export declare class CreateUserDto extends LoginUserDto {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    dateOfBirth: Date;
    role: string;
    email: string;
    city: City;
    phoneNumber: string;
    tierLevel: TierLevel;
}
