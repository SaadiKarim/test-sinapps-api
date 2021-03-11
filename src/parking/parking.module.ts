import { HttpModule, Module } from '@nestjs/common';
import { ParkingService } from '@parking/parking.service';
import { ParkingController } from '@parking/parking.controller';

@Module({
    imports: [HttpModule],
    providers: [ParkingService],
    controllers: [ParkingController]
})
export class ParkingModule { }
