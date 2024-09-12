import { Module } from '@nestjs/common';
import { JwtHelpers } from './jwt.helper';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configureService: ConfigService) => ({
        secret: configureService.get<string>('SECRET_JWT_SEDD'),
        signOptions: {
          expiresIn: configureService.get<string>('JWT_EXPRIRE_IN'),
        },
      }),
    }),
  ],
  exports: [JwtHelpers],
  providers: [JwtHelpers, UsersService],
})
export class HelpersModule {}
