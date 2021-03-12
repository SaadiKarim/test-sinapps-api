import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {

    private users: User[] = [
        new User({
            id: '1',
            name: 'Karim SAADI',
            email: 'karimsaadi.dev@gmail.com',
            password: '12',
            can: {
                create: false,
                delete: false,
                manage: false,
                read: true,
                update: false
            }
        }),
        new User({
            id: '2',
            name: 'Hand Graradji',
            email: 'hgraradji@hello.fr',
            password: '34',
            can: {
                create: true,
                delete: true,
                manage: true,
                read: true,
                update: true
            }
        }),
    ]

    async findOne(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }
}
