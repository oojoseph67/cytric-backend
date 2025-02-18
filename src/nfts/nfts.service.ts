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
    } catch (error: any) {
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

  async findOne(id: number) {
    let nft: Nft;

    try {
      nft = await this.nftModel.findOne({ nftId: id });
    } catch (error: any) {
      throw new HttpException(
        `Error finding NFT with id: ${id}... ${error.message}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
          description: error,
        },
      );
    }

    if (!nft) {
      throw new HttpException(
        `NFT with id: ${id} was not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return nft;
  }

  async findByWallet(userWallet: string) {
    let nft: Nft[];

    try {
      nft = await this.nftModel.find({ userWallet: userWallet.toLowerCase() });
    } catch (error: any) {
      throw new HttpException(
        `Error finding NFT for wallet address: ${userWallet}... ${error.message}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
          description: error,
        },
      );
    }

    return nft;
  }

  update(id: number, updateNftDto: UpdateNftDto) {
    return `This action updates a #${id} nft`;
  }

  remove(id: number) {
    return `This action removes a #${id} nft`;
  }
}
