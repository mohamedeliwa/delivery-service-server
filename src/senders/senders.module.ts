import { Module } from '@nestjs/common';
import { SendersController } from './senders.controller';
import { SendersService } from './senders.service';

@Module({
  controllers: [SendersController],
  providers: [SendersService],
})
export class SendersModule {}
