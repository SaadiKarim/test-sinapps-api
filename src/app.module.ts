import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { CaslModule } from '@casl/casl.module';
import { ParkingModule } from '@parking/parking.module';
import { AuthModule } from '@auth/auth.module';

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
        }),
        CaslModule,
        ParkingModule,
        AuthModule
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ]
})
export class AppModule { }
