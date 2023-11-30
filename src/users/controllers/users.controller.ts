import {
  Controller,
  Get,
  Param,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import User from '../schemas/user.schema';
import { UsersService } from '../services/users.service';
import UserParamsDto from '../dtos/user.params.dto';

@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    whitelist: true,
    forbidUnknownValues: true,
  }),
)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('identity')
  identity(@Request() req): User {
    return req.user;
  }

  @Get(':id')
  findOne(@Param() { id }: UserParamsDto): User {
    return this.usersService.findOne(id);
  }
}
