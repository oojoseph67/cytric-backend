import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { NftsService } from './nfts.service';
import { CreateNftDto } from './dto/create-nft.dto';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Post()
  create(@Body() createNftDto: CreateNftDto) {
    return this.nftsService.create({ nftData: createNftDto });
  }

  @Get('/findByWallet')
  findByWallet(@Query('userWallet') userWallet: string) {
    return this.nftsService.findByWallet(userWallet);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nftsService.findOne(+id);
  }
}
