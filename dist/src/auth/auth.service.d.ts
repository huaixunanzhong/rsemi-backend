import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(data: any): Promise<any>;
}
