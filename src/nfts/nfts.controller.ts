import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NftsService } from './nfts.service';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Post()
  create(@Body() createNftDto: CreateNftDto) {
    return this.nftsService.create({ nftData: createNftDto });
  }

  @Get()
  findAll() {
    return this.nftsService.findAll();
  }

  @Get('/findByWallet')
  findByWallet(@Query('userWallet') userWallet: string) {
    return this.nftsService.findByWallet(userWallet);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nftsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNftDto: UpdateNftDto) {
    return this.nftsService.update(+id, updateNftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nftsService.remove(+id);
  }
}
