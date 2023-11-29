import { Module } from '@nestjs/common';
import { SendersController } from './controllers/senders.controller';
import { SendersService } from './services/senders.service';

@Module({
  controllers: [SendersController],
  providers: [SendersService],
})
export class SendersModule {}
