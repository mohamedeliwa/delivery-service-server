import { Module } from '@nestjs/common';
import { ParcelsController } from './controllers/parcels.controller';
import { ParcelsService } from './services/parcels.service';

@Module({
  controllers: [ParcelsController],
  providers: [ParcelsService],
})
export class ParcelsModule {}
