import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { CreateNftDto } from './dto/create-nft.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from '@nestjs/swagger';

@Controller('nfts')
@ApiTags('NFTs')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @ApiOperation({
    summary: 'Create an NFT',
    description: 'Creates a new NFT and associates it with a wallet address',
  })
  @ApiResponse({
    status: 201,
    description: 'NFT successfully created',
    type: CreateNftDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Invalid input data',
  })
  @ApiBody({
    type: CreateNftDto,
    description: 'NFT creation data',
  })
  @Post()
  create(@Body() createNftDto: CreateNftDto) {
    return this.nftsService.create({ nftData: createNftDto });
  }

  @ApiOperation({
    summary: 'Find NFTs by wallet address',
    description: 'Retrieves all NFTs associated with a specific wallet address',
  })
  @ApiResponse({
    status: 200,
    description: 'List of NFTs found',
    type: [CreateNftDto],
  })
  @ApiQuery({
    name: 'userWallet',
    description: 'Wallet address to search NFTs for',
    example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    required: true,
    type: String,
  })
  @Get('/findByWallet')
  findByWallet(@Query('userWallet') userWallet: string) {
    return this.nftsService.findByWallet(userWallet);
  }

  @ApiOperation({
    summary: 'Find NFT by ID',
    description: 'Retrieves a specific NFT by its ID',
  })
  @ApiResponse({
    status: 200,
    description: 'NFT found',
    type: CreateNftDto,
  })
  @ApiResponse({
    status: 404,
    description: 'NFT not found',
  })
  @ApiParam({
    name: 'id',
    description: 'NFT ID to search for',
    example: 123,
    type: Number,
    required: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nftsService.findOne(+id);
  }
}
