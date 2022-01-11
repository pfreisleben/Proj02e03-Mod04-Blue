import { Injectable } from '@nestjs/common';
import { Prisma, Categoria } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
@Injectable()
export class CategoriasService {
  constructor( private prisma: PrismaService) {}

  create(data: CreateCategoriaDto) {
    return this.prisma.categoria.create({data})
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({where: {id}})
  }

  update(id: number, data: UpdateCategoriaDto) {
    return this.prisma.categoria.update({where: {id}, data: {... data}})
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
