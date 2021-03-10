import { Injectable } from '@nestjs/common';
import { GetParkingsDto, ResParkingsDto } from '@parking/parking.dtos';

@Injectable()
export class ParkingService {
    
    async getParkings(parkingOptions: GetParkingsDto): Promise<ResParkingsDto[]> {
        return []
    }
}
