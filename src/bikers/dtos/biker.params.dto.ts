import { IsNotEmpty, IsOptional } from 'class-validator';

export default class BikerParamsDto {
  @IsOptional()
  @IsNotEmpty()
  id?: number;
}
