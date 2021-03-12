import { UserCan } from "@users/user.interfaces";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    can: UserCan;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.can = data.can;
    }
}
