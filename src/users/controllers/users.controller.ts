import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import UserCredentialsDto from '../dtos/user.credentials.dto';
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

  @Post('/login')
  login(@Body() user: UserCredentialsDto): User {
    return this.usersService.login(user);
  }

  @Get(':id')
  findOne(@Param() { id }: UserParamsDto): User {
    return this.usersService.findOne(id);
  }
}
