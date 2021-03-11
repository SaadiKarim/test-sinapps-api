import { Type } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';
import { UserCan } from '@users/user.interfaces';

export class UserDTO {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @Type()
    can: UserCan
}

export class CreateUserDTO extends UserDTO {
  @IsString()
  id: string;
}
