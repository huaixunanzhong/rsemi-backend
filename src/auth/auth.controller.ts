import {Body, Controller, Get, HttpCode, HttpStatus, Post,Request} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {Public} from "./decorators/public.decorator";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('login')
     login(@Body() loginDto:{username:string,password:string}){
       return this.authService.login(loginDto)
    }

    @Get('profile')
    getProfile(@Request() req:any){
        return req.user;
    }
}
