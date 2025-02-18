import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateNftDto {
  @ApiProperty({
    description: 'The name of the NFT',
    example: 'Cosmic Voyager #123',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  nftName: string;

  @ApiProperty({
    description: 'A detailed description of the NFT',
    example:
      'A unique digital artwork featuring a cosmic explorer traversing the universe',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  nftDescription: string;

  @ApiProperty({
    description: 'The URL pointing to the NFT image/media',
    example: 'https://example.com/nft/cosmic-voyager-123.png',
    type: 'string',
  })
  @IsUrl()
  @IsNotEmpty()
  nftLogoUrl: string;

  @ApiProperty({
    description: 'The unique identifier for the NFT',
    example: 123,
    type: 'number',
  })
  @IsNumber()
  @IsNotEmpty()
  nftId: number;

  @ApiProperty({
    description: 'The blockchain wallet address of the NFT owner',
    example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  userWallet: string;
}
