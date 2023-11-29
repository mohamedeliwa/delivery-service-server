import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SendersService } from '../services/senders.service';
import SenderParamsDto from '../dtos/sender.params.dto';
import SenderLoginDto from '../dtos/sender.login.dto';
import Sender from '../schemas/sender.schema';

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

  @Post('/login')
  login(@Body() sender: SenderLoginDto): Sender {
    return this.sendersService.login(sender);
  }

  @Get(':id')
  getSender(@Param() { id }: SenderParamsDto): Sender {
    return this.sendersService.getSender(id);
  }
}
