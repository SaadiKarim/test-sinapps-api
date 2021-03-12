import { HttpService, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateParkingDto, GetParkingsDto, ResParkingsDto } from '@parking/parking.dtos';
import { Observable } from 'rxjs';

@Injectable()
export class ParkingService {

    constructor(@Inject('PARKING_SERVICE') private client: ClientProxy) { }

    /**
     * @description
     */
    getParkings(params: GetParkingsDto): Observable<ResParkingsDto[]> {
        return this.client.send<ResParkingsDto[]>({ cmd: 'getParkings' }, params);
    }

    /**
     * @description
     */
    getParking(id: string): Observable<ResParkingsDto> {
        return this.client.send<ResParkingsDto>({ cmd: 'getParking' }, id);
    }

    /**
     * @description
     */
    createParking(parkingToCreate: CreateParkingDto): Observable<ResParkingsDto> {
        return this.client.send<ResParkingsDto>({ cmd: 'createParking' }, parkingToCreate);
    }

    /**
     * @description
     */
    updateParking(id: string, parkingToUpdate: CreateParkingDto): Observable<ResParkingsDto> {
        return this.client.send<ResParkingsDto>({ cmd: 'updateParking' }, parkingToUpdate);
    }

    /**
     * @description
     */
    deleteParking(id: string): Observable<ResParkingsDto> {
        return this.client.send<ResParkingsDto>({ cmd: 'deleteParking' }, id);
    }
}
