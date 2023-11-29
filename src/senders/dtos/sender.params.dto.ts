import { IsNotEmpty, IsOptional } from 'class-validator';

export default class SenderParamsDto {
  @IsOptional()
  @IsNotEmpty()
  id?: number;
}
