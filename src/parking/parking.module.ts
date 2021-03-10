import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10,
        })
    ],
    controllers: [ParkingController],
    providers: [ParkingService],
})
export class ParkingModule { }
