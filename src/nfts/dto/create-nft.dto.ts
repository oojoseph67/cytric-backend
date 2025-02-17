import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateNftDto {
  @IsString()
  @IsNotEmpty()
  nftName: string;

  @IsString()
  @IsNotEmpty()
  nftDescription: string;

  @IsUrl()
  @IsNotEmpty()
  nftLogoUrl: string;

  @IsNumber()
  @IsNotEmpty()
  nftId: number;

  @IsString()
  @IsNotEmpty()
  userWallet: string;
}
