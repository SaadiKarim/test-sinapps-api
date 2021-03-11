import { CreateUserDTO } from "@users/user.dtos";
import { UserCan } from "@users/user.interfaces";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    can: UserCan;

    constructor(data: CreateUserDTO) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.can = data.can;
    }
}
