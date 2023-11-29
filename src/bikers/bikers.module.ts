import { Module } from '@nestjs/common';
import { BikersController } from './controllers/bikers.controller';
import { BikersService } from './services/bikers.service';

@Module({
  controllers: [BikersController],
  providers: [BikersService],
})
export class BikersModule {}
