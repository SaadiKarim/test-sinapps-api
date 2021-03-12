import { ForbiddenException, SetMetadata } from '@nestjs/common';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { User } from '@users/user.model';

export enum CanDo {
    Ceate,
    Read,
    Update,
    Delete
}
export const CanDoDeco = (...actions: CanDo[]) => SetMetadata('action', actions);

@Injectable()
export class CanDoGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        let user = this.jwtService.decode(request.headers.authorization.split('Bearer ')[1]);

        if(!user) throw ForbiddenException;
        user = new User(user);

        const action = this.reflector.getAllAndOverride<CanDo>('action', [
            context.getHandler(),
            context.getClass(),
        ]);
        const roleContext = CanDo[(action[0])];
        switch (CanDo[roleContext]) {
            case CanDo.Ceate:
                return user.can.create;
            case CanDo.Update:
                return user.can.update;
            case CanDo.Delete:
                return user.can.delete;
            case CanDo.Read:
                return user.can.read;
        }
    }
}