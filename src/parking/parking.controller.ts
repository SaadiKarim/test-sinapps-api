import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { Body, Controller, Get, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateParkingDto, GetParkingsDto, ResParkingsDto } from '@parking/parking.dtos';
import { ParkingService } from '@parking/parking.service';

@Controller('parkings')
export class ParkingController {

     constructor(private parkingService: ParkingService) { }

     @Get()
     @UsePipes(new ValidationPipe({ transform: true }))
     async getParkings(@Query() params: GetParkingsDto): Promise<ResParkingsDto[]> {
          return await this.parkingService.getParkings(params);
     }

     @UseGuards(JwtAuthGuard)
     @Post()
     async createParking(@Body() createParking: CreateParkingDto): Promise<ResParkingsDto[]> {
          return await null;
     }
}
