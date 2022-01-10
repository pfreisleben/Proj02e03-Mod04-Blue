import { Injectable } from '@nestjs/common';
import { CreateCategoriaTweetDto } from './dto/create-categoria-tweet.dto';
import { UpdateCategoriaTweetDto } from './dto/update-categoria-tweet.dto';

@Injectable()
export class CategoriaTweetService {
  create(createCategoriaTweetDto: CreateCategoriaTweetDto) {
    return 'This action adds a new categoriaTweet';
  }

  findAll() {
    return `This action returns all categoriaTweet`;
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
