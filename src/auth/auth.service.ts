import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '@users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './auth.dtos';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(loginDto: LoginDto) {
        const user = await this.usersService.findOne(loginDto.email);
        if (user && user.password === loginDto.password) {
            const { password, ...userForToken } = user;
            return {
                access_token: this.jwtService.sign(userForToken),
            };
        } else {
            throw new NotFoundException()
        }

    }
}
