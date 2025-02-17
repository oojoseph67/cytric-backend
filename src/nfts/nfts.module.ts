import { Module } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { NftsController } from './nfts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nft, NftSchema } from './entities/nft.entity';

@Module({
  controllers: [NftsController],
  providers: [NftsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Nft.name,
        schema: NftSchema,
      },
    ]),
  ],
})
export class NftsModule {}
