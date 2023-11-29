import { IsNotEmpty, IsOptional } from 'class-validator';

export default class ParcelParamsDto {
  @IsOptional()
  @IsNotEmpty()
  id?: number;
}
