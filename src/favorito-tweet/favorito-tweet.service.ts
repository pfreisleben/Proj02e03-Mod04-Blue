import { Injectable } from '@nestjs/common';
import { CreateFavoritoTweetDto } from './dto/create-favorito-tweet.dto';
import { UpdateFavoritoTweetDto } from './dto/update-favorito-tweet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, FavoriteTweet } from '@prisma/client';

@Injectable()
export class FavoritoTweetService {
  constructor( private prisma: PrismaService) {}
  create(createFavoritoTweetDto: CreateFavoritoTweetDto) {
    return this.prisma.favoriteTweet.create({
      data: {... createFavoritoTweetDto}
    })
  }

  findAll() {
    return this.prisma.favoriteTweet.findMany();
  }

  findOne(id: number) {
    return this.prisma.favoriteTweet.findFirst({where: {tweetId: id}})
  }

  update(id: number, updateFavoritoTweetDto: UpdateFavoritoTweetDto) {
    return `This action updates a #${id} favoritoTweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoritoTweet`;
  }
}
