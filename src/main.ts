import { NestFactory } from '@nestjs/core';
import { ParkingModule } from './parking/parking.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(ParkingModule, { cors: true });
  app.use(helmet());
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  app.use(csurf());
  await app.listen(3000);
}
bootstrap();
