import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class ReportDto {
  @IsNotEmpty()
  @IsString()
  suspectName: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;
}
