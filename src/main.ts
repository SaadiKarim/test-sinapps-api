import { NestFactory } from '@nestjs/core';
import { ParkingModule } from './parking/parking.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as session from 'express-session';
import * as compression from 'compression';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(ParkingModule, { cors: true });
  const configService = app.get(ConfigService);

  app.use(helmet());
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  app.use(csurf());
  app.use(compression());

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
