import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Tweet } from '@prisma/client';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService){}
  create(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return this.prisma.tweet.create({data: {... createTweetDto}})
  }

  findAll() {
    return this.prisma.tweet.findMany();
  }

  findOne(id: number) {
    return this.prisma.tweet.findUnique({where: {id}})
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return this.prisma.tweet.update({
      where: {id},
      data: {... updateTweetDto}
    })
  }

  remove(id: number) {
    return this.prisma.tweet.delete({where: {id}})
  }
}
