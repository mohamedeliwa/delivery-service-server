import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import UserCredentialsDto from 'src/users/dtos/user.credentials.dto';
import { AuthenticationService } from '../services/authentication.service';
import { Public } from '../decorators/public.decorator';

@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    whitelist: true,
    forbidUnknownValues: true,
  }),
)
@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Public()
  @Post('login')
  signIn(@Body() userCredentialsDto: UserCredentialsDto) {
    return this.authService.login(
      userCredentialsDto.name,
      userCredentialsDto.password,
    );
  }
}
