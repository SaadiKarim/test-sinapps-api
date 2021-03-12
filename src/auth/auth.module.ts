import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@users/users.module';
import { AuthService } from '@auth/auth.service';
import { LocalStrategy } from '@auth/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@auth/jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule
      .registerAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return {
            secret: configService.get('JWT_SECRET'),
            signOptions: { expiresIn: configService.get('JWT_EXPIRES') },
          }
        }
      })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
  controllers: [AuthController]
})
export class AuthModule { }
