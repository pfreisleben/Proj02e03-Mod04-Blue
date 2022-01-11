import { Injectable } from '@nestjs/common';
import { Prisma, CategoriasOnTweets } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaTweetDto } from './dto/create-categoria-tweet.dto';
import { UpdateCategoriaTweetDto } from './dto/update-categoria-tweet.dto';

@Injectable()
export class CategoriaTweetService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCategoriaTweetDto) {
    return this.prisma.categoriasOnTweets.create({ data })
  }

  findAll() {
    return this.prisma.categoriasOnTweets.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaTweet`;
  }

  update(id: number, updateCategoriaTweetDto: UpdateCategoriaTweetDto) {
    return `This action updates a #${id} categoriaTweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaTweet`;
  }
}
