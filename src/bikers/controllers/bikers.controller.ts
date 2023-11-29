import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BikersService } from '../services/bikers.service';
import Biker from '../schemas/biker.schema';
import BikerCredentialsDto from '../dtos/biker.credentials.dto';
import BikerParamsDto from '../dtos/biker.params.dto';

@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    whitelist: true,
    forbidUnknownValues: true,
  }),
)
@Controller('bikers')
export class BikersController {
  constructor(private readonly bikersService: BikersService) {}

  @Post('/login')
  login(@Body() biker: BikerCredentialsDto): Biker {
    return this.bikersService.login(biker);
  }

  @Get(':id')
  getBiker(@Param() { id }: BikerParamsDto): Biker {
    return this.bikersService.getBiker(id);
  }
}
