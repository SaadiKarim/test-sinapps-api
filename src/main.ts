import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as session from 'express-session';
import * as compression from 'compression';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  app.use(helmet());
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  const config = new DocumentBuilder()
    .setTitle('Parking API')
    .setDescription('Sinapps parking API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
