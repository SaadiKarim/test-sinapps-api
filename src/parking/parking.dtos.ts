import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty } from 'class-validator';

export class GetParkingsDto {
  @Transform(({ value }) => value.split(','))
  point1: string[];
  @Transform(({ value }) => value.split(','))
  point2: string[];
  @Transform(({ value }) => value.split(','))
  point3: string[];
  @Transform(({ value }) => value.split(','))
  point4: string[];
  @Transform(({ value }) => value.split(','))
  point5: string[];
}

export class ResParkingsDto {
  @IsNotEmpty()
  test: string;
}

export class GetParkingsWFS {

}

export class ResParkingsWFS {

}

export class CreateParkingDto { }