import { IsNotEmpty, IsString } from 'class-validator';

export default class UserCredentialsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
