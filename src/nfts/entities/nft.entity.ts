import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class Nft extends Document {
  @Prop({
    type: String,
    required: true,
  })
  nftName: string;

  @Prop({
    type: String,
    required: true,
  })
  nftDescription: string;

  @Prop({
    type: String,
    required: true,
  })
  nftLogoUrl: string;

  @Prop({
    type: Number,
    required: true,
    unique: true,
  })
  nftId: number;

  @Prop({
    type: String,
    required: true,
    lowercase: true,
  })
  userWallet: string;
}

export type NftDocument = HydratedDocument<Nft>;

export const NftSchema = SchemaFactory.createForClass(Nft);