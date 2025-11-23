import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Body, Post, Controller } from "@nestjs/common";
import { Public } from "../auth/decorators/public.decorator";

@Controller("auth")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post("register")
  register(@Body() dto: CreateUserDto) {
    return this.userService.register(dto);
  }
}
