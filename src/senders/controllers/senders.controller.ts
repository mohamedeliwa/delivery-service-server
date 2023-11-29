import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Sender, SendersService } from '../services/senders.service';
import SenderParamsDto from '../dtos/SenderParamsDto';

@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    whitelist: true,
    forbidUnknownValues: true,
  }),
)
@Controller('senders')
export class SendersController {
  constructor(private readonly sendersService: SendersService) {}

  @Get(':id')
  getSender(@Param() { id }: SenderParamsDto): Sender {
    return this.sendersService.getSender(id);
  }
}
