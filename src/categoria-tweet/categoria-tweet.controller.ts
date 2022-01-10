import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaTweetService } from './categoria-tweet.service';
import { CreateCategoriaTweetDto } from './dto/create-categoria-tweet.dto';
import { UpdateCategoriaTweetDto } from './dto/update-categoria-tweet.dto';

@Controller('categoria-tweet')
export class CategoriaTweetController {
  constructor(private readonly categoriaTweetService: CategoriaTweetService) {}

  @Post()
  create(@Body() createCategoriaTweetDto: CreateCategoriaTweetDto) {
    return this.categoriaTweetService.create(createCategoriaTweetDto);
  }

  @Get()
  findAll() {
    return this.categoriaTweetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaTweetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaTweetDto: UpdateCategoriaTweetDto) {
    return this.categoriaTweetService.update(+id, updateCategoriaTweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaTweetService.remove(+id);
  }
}
