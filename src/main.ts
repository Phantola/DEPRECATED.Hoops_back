import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.setBaseViewsDir(join(__dirname, '..', 'static'));
  app.setViewEngine('hbs');

  app.enableCors({
    origin: ['https:routainer.janglunalab.com', '/.github.io$/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  });

  await app.listen(3000);
}
bootstrap();
