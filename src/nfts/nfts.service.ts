import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { Nft } from './entities/nft.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NftsService {
  constructor(
    @InjectModel(Nft.name)
    private readonly nftModel: Model<Nft>,
  ) {}

  async create({ nftData }: { nftData: CreateNftDto }): Promise<Nft> {
    const { nftId } = nftData;

    const existingNFT = await this.nftModel.findOne({ nftId: nftId });

    if (existingNFT) {
      throw new HttpException(
        `NFT with id: ${nftId} already exists`,
        HttpStatus.CONFLICT,
        {
          cause: `Duplicate nft with email: ${nftId}`,
          description: 'NFT already exists',
        },
      );
    }

    try {
      const newNft = new this.nftModel(nftData);
      const savedData = await newNft.save();

      return savedData.toJSON();
    } catch (error) {
      throw new HttpException(
        `Error while creating NFT: ${error.message}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
          description: error,
        },
      );
    }
  }

  findAll() {
    return `This action returns all nfts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nft`;
  }

  update(id: number, updateNftDto: UpdateNftDto) {
    return `This action updates a #${id} nft`;
  }

  remove(id: number) {
    return `This action removes a #${id} nft`;
  }
}
