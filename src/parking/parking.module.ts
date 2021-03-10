import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { ParkingService } from '@parking/parking.service';
import { ParkingController } from '@parking/parking.controller';

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10
        }),
        CacheModule.register({
            ttl: 5,
            max: 10
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: 'config/development.env',
            cache: true
        })
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
        ParkingService
    ],
    controllers: [
        ParkingController
    ]
})
export class ParkingModule { }
