import { HttpModule, Module } from '@nestjs/common';
import { ParkingService } from '@parking/parking.service';
import { ParkingController } from '@parking/parking.controller';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from '@auth/auth.module';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        HttpModule,
        ClientsModule,
        AuthModule
    ],
    providers: [ParkingService, {
        provide: 'PARKING_SERVICE',
        useFactory: (configService: ConfigService) => {
            console.log(configService.get('PARKING_SERVICE_PORT'));
            return ClientProxyFactory.create({
                options: {
                    port: configService.get('PARKING_SERVICE_PORT'),
                    host: configService.get('PARKING_SERVICE_HOST')
                }
            });
        },
        inject: [ConfigService],
    }],
    controllers: [ParkingController]
})
export class ParkingModule { }
