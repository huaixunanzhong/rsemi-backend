import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123123123",
      database: "rsemi-admin",
      autoLoadEntities: true, // 自动加载 entity
      synchronize: true, // ⚠ 开发环境可用，生产禁用
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
