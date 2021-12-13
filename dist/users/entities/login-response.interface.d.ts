import { UserI } from "./user.interface";
export interface LoginResponseI {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: UserI;
}
