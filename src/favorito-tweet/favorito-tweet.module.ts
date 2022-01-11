import { Module } from '@nestjs/common';
import { FavoritoTweetService } from './favorito-tweet.service';
import { FavoritoTweetController } from './favorito-tweet.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FavoritoTweetController],
  providers: [FavoritoTweetService, PrismaService]
})
export class FavoritoTweetModule {}
