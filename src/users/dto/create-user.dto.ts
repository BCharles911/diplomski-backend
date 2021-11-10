import { IsNotEmpty, IsString } from "class-validator";
import { Tier } from "src/tier/entities/tier.entity";
import { LoginUserDto } from "./login-user.dto";

export class CreateUserDto extends LoginUserDto {


    @IsString()
    @IsNotEmpty()
    username: string;

    firstName: string;

    lastName: string;

    dateOfBirth: Date;

    tier: Tier;

    phoneNumber: string;
    


}
