import { NestFactory } from '@nestjs/core';
import { ParkingModule } from './parking/parking.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(ParkingModule);
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
