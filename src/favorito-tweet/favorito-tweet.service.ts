import { Injectable } from '@nestjs/common';
import { CreateFavoritoTweetDto } from './dto/create-favorito-tweet.dto';
import { UpdateFavoritoTweetDto } from './dto/update-favorito-tweet.dto';

@Injectable()
export class FavoritoTweetService {
  create(createFavoritoTweetDto: CreateFavoritoTweetDto) {
    return 'This action adds a new favoritoTweet';
  }

  findAll() {
    return `This action returns all favoritoTweet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoritoTweet`;
  }

  update(id: number, updateFavoritoTweetDto: UpdateFavoritoTweetDto) {
    return `This action updates a #${id} favoritoTweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoritoTweet`;
  }
}
