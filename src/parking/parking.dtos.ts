import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class GetParkingsDto {
  @Transform(({ value }) => value.split(','))
  @IsNotEmpty()
  point1: string[];
  @Transform(({ value }) => value.split(','))
  @IsNotEmpty()
  point2: string[];
  @Transform(({ value }) => value.split(','))
  @IsNotEmpty()
  point3: string[];
  @Transform(({ value }) => value.split(','))
  @IsNotEmpty()
  point4: string[];
  @Transform(({ value }) => value.split(','))
  @IsNotEmpty()
  point5: string[];
}

export class ResParkingsDto {}
export class CreateParkingDto { }
export class UpdateParkingDto { }