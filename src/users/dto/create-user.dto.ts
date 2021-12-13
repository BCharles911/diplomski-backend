import { IsNotEmpty, IsString } from "class-validator";
import { City } from "../entities/city.entity";
import { TierLevel } from "../entities/user.entity";
import { LoginUserDto } from "./login-user.dto";

export class CreateUserDto extends LoginUserDto {


    @IsString()
    @IsNotEmpty()
    username: string;

    firstName: string;

    lastName: string;

    password: string;

    dateOfBirth: Date;

    //tier: Tier;
    role: string;

    email: string;
    
    city: City;
    
    phoneNumber: string;

    tierLevel: TierLevel
    


}
