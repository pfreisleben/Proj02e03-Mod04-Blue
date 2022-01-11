import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FavoritoTweetService } from './favorito-tweet.service';
import { CreateFavoritoTweetDto } from './dto/create-favorito-tweet.dto';
import { UpdateFavoritoTweetDto } from './dto/update-favorito-tweet.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('favorito-tweet')
export class FavoritoTweetController {
  constructor(private readonly favoritoTweetService: FavoritoTweetService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFavoritoTweetDto: CreateFavoritoTweetDto) {
    return this.favoritoTweetService.create(createFavoritoTweetDto);
  }

  @Get()
  findAll() {
    return this.favoritoTweetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritoTweetService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFavoritoTweetDto: UpdateFavoritoTweetDto) {
    return this.favoritoTweetService.update(+id, updateFavoritoTweetDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.favoritoTweetService.remove(+id);
  }
}
