import { Module } from '@nestjs/common';
import { BikersController } from './bikers.controller';
import { BikersService } from './bikers.service';

@Module({
  controllers: [BikersController],
  providers: [BikersService],
})
export class BikersModule {}
