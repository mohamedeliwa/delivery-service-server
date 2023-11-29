import { IsNotEmpty, IsString } from 'class-validator';

export default class SenderLoginDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
