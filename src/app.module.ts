import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ParcelsModule,
    UsersModule,
    AuthenticationModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
