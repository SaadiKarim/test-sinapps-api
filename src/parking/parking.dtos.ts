import { IsNotEmpty } from 'class-validator';

export class GetParkingsDto {
  @IsNotEmpty()
  test: string;
}

export class ResParkingsDto {
  @IsNotEmpty()
  test: string;
}

export class GetParkingsWFS {

}

export class ResParkingsWFS {
  
}