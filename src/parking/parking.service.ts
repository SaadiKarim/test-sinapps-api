import { HttpService, Injectable } from '@nestjs/common';
import { GetParkingsDto, ResParkingsDto } from '@parking/parking.dtos';

@Injectable()
export class ParkingService {

    constructor(private httpService: HttpService) { }

    async getParkings(params: GetParkingsDto): Promise<ResParkingsDto[]> {
        console.log(params);
        return []
    }
}
