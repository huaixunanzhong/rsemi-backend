import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { ResponseInterceptor } from "./common/interceptors/response.interceptor";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

// 开启swagger api
function useSwagger(app: NestExpressApplication) {
  const options = new DocumentBuilder()
    .setTitle("Swagger API")
    .setDescription("The Swagger API Description")
    .setVersion("1.0")
    .addTag("Swagger")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });

  app.enableCors({
    origin: "http://localhost:3000", // 只允许你的前端访问
    methods: "GET,POST,PUT,DELETE",
    credentials: false,
  });

  // 服务统一前缀（适用于统一网关服务）
  app.setGlobalPrefix("api/v1", { exclude: ["login"] });

  app.useGlobalInterceptors(new ResponseInterceptor());

  // 使用swagger生成API文档
  useSwagger(app);

  // 服务监听
  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
