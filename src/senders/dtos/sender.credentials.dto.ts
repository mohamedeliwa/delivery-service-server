import { IsNotEmpty, IsString } from 'class-validator';

export default class SenderCredentialsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
