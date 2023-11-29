import { IsNotEmpty, IsString } from 'class-validator';

export default class BikerCredentialsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
