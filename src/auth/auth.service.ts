import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService:JwtService
    ) {}



    async login(data: any): Promise<any> {
        const user=await this.userService.findOne(data.username)
        if(user?.password!==data.password){
            throw new UnauthorizedException()
        }

        const payload={sub:user.id,username:user.username}

        return {
            access_token: await this.jwtService.signAsync(payload)
        }

    }


}
