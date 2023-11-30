import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDateString,
  IsDate,
} from 'class-validator';

export default class UpdateParcelDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  biker?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  pickedAt?: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  droppedAt?: Date;
}
