import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import {ResponseInterceptor} from "./common/interceptors/response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{abortOnError:false});

    app.enableCors({
        origin: 'http://localhost:3000', // 只允许你的前端访问
        methods: 'GET,POST,PUT,DELETE',
        credentials: false,
    });

    app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
