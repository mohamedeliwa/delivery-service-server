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
import Sender from '../schemas/sender.schema';
import SenderCredentialsDto from '../dtos/sender.credentials.dto';

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
  login(@Body() sender: SenderCredentialsDto): Sender {
    return this.sendersService.login(sender);
  }

  @Get(':id')
  getSender(@Param() { id }: SenderParamsDto): Sender {
    return this.sendersService.getSender(id);
  }
}
