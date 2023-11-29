import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export default class UpdateParcelDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  pickupAddress?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dropoffAddress?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  biker?: number;
}
