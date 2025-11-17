"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
const swagger_1 = require("@nestjs/swagger");
function useSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Swagger API")
        .setDescription("The Swagger API Description")
        .setVersion("1.0")
        .addTag("Swagger")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api", app, document);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        abortOnError: false,
    });
    app.enableCors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: false,
    });
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    useSwagger(app);
    const port = process.env.PORT || 3001;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map