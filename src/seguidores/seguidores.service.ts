import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Seguidores } from '@prisma/client';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';

@Injectable()
export class SeguidoresService {
  constructor(private prisma: PrismaService) {}
  create(createSeguidoreDto: CreateSeguidoreDto): Promise<Seguidores> {
    return this.prisma.seguidores.create({
      data: { ...createSeguidoreDto },
    });
  }

  findAll(): Promise<Seguidores[]> {
    return this.prisma.seguidores.findMany();
  }

  findOne(id: number): Promise<Seguidores[]> {
    return this.prisma.seguidores.findMany({
      where: { usuarioId: id },
    });
  }

  update(
    id: number,
    updateSeguidoreDto: Prisma.SeguidoresUpdateInput,
  ): Promise<Seguidores> {
    return this.prisma.seguidores.update({
      where: { id },
      data: { ...updateSeguidoreDto },
    });
  }

  remove(id: number) {
    return this.prisma.seguidores.delete({ where: { id } });
  }
}
