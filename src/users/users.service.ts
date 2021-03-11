import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {

    private users: User[] = [
        new User({
            id: '1',
            name: 'Karim SAADI',
            email: 'ksaadi@hello.fr',
            password: '',
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
            password: '',
            can: {
                create: true,
                delete: true,
                manage: true,
                read: true,
                update: true
            }
        }),
    ]

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }
}
