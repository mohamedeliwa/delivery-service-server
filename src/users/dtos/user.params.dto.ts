import { IsNotEmpty, IsOptional } from 'class-validator';

export default class UserParamsDto {
  @IsOptional()
  @IsNotEmpty()
  id?: number;
}
