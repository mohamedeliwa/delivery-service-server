import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './controllers/authentication.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthenticationGuard } from './guards/jwt.authentication.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'JWT-Secret',
    }),
  ],
  providers: [
    AuthenticationService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthenticationGuard,
    },
  ],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
