import { CanDoDeco, CanDo, CanDoGuard } from '@auth/can-do';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateParkingDto, GetParkingsDto, ResParkingsDto } from '@parking/parking.dtos';
import { ParkingService } from '@parking/parking.service';

@Controller('parkings')
export class ParkingController {

     constructor(private parkingService: ParkingService) { }

     /**
      * @description
      */
     @Get()
     @UsePipes(new ValidationPipe({ transform: true }))
     async getParkings(@Query() params: GetParkingsDto): Promise<ResParkingsDto[]> {
          return await this.parkingService.getParkings(params).toPromise();
     }

     /**
     * @description
     */
     @Get(':id')
     @CanDoDeco(CanDo.Read)
     @UseGuards(CanDoGuard)
     async getParking(@Param('id') id: string): Promise<ResParkingsDto> {
          return await this.parkingService.getParking(id).toPromise();
     }

     /**
      * @description
      */
     @Post()
     @UseGuards(JwtAuthGuard)
     @CanDoDeco(CanDo.Ceate)
     @UseGuards(CanDoGuard)
     async createParking(@Body() parkingToCreate: CreateParkingDto): Promise<ResParkingsDto> {
          return await this.parkingService.createParking(parkingToCreate).toPromise();
     }

     /**
      * @description
      */
     @UseGuards(JwtAuthGuard)
     @Put(':id')
     @CanDoDeco(CanDo.Update)
     @UseGuards(CanDoGuard)
     async updateParking(@Param('id') id: string, @Body() parkingToUpdate: CreateParkingDto): Promise<ResParkingsDto> {
          return await this.parkingService.updateParking(id, parkingToUpdate).toPromise();
     }

     /**
      * @description
      */
     @UseGuards(JwtAuthGuard)
     @Delete(':id')
     @CanDoDeco(CanDo.Delete)
     @UseGuards(CanDoGuard)
     async deleteParking(@Param('id') id: string): Promise<ResParkingsDto> {
          console.log(id);
          return await this.parkingService.deleteParking(id).toPromise();
     }
}
