import { Module } from '@nestjs/common';
import { ParcelsController } from './controllers/parcels.controller';
import { ParcelsService } from './services/parcels.service';
import { ParcelsGateway } from './gateways/parcels.gateway';

@Module({
  controllers: [ParcelsController],
  providers: [ParcelsService, ParcelsGateway],
})
export class ParcelsModule {}
