import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export default class FindParcelDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  sender?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  biker?: number;
}
