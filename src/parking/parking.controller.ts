import { Controller, Get, Query } from '@nestjs/common';
import { GetParkingsDto, ResParkingsDto } from '@parking/parking.dtos';
import { ParkingService } from '@parking/parking.service';

@Controller('parkings')
export class ParkingController {
    
    constructor(private parkingService: ParkingService) {}
    
    @Get()
    async getParkings(@Query() parkingOptions: GetParkingsDto):  Promise<ResParkingsDto[]> {
         return await this.parkingService.getParkings(parkingOptions);
    }
}
