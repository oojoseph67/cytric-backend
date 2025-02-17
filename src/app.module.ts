import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NftsModule } from './nfts/nfts.module';

export const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // uri: configService.get('MONGODB_URI'),
        uri: 'mongodb+srv://o3jpro:oojosepH67@cluster0.exyirxv.mongodb.net/CYTRIC?retryWrites=true&w=majority&appName=Cluster0',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    NftsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
