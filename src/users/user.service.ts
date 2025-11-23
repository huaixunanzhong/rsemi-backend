import { BadRequestException, Injectable } from "@nestjs/common";
import { sleep } from "../utils/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  // 注册用户
  async register(dto: CreateUserDto) {
    const exist = await this.userRepo.findOne({ where: { email: dto.email } });

    if (exist) {
      throw new BadRequestException("邮箱已被注册");
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      email: dto.email,
      username: dto.username,
      password: hashed,
    });

    const saved = await this.userRepo.save(user);
    const { password, ...rest } = saved;
    return rest; // 不返回密码
  }

  // 根据 ID 查找用户
  async findById(id: number): Promise<User | null> {
    return this.userRepo.findOne({ where: { id } });
  }
}
