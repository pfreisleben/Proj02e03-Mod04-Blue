import { Module } from '@nestjs/common';
import { FavoritoTweetService } from './favorito-tweet.service';
import { FavoritoTweetController } from './favorito-tweet.controller';

@Module({
  controllers: [FavoritoTweetController],
  providers: [FavoritoTweetService]
})
export class FavoritoTweetModule {}
