import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export default class CreateParcelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  pickupAddress: string;

  @IsNotEmpty()
  @IsString()
  dropoffAddress: string;

  @IsNotEmpty()
  @IsNumber()
  sender: number;
}
