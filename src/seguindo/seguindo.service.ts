import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Seguindo } from '@prisma/client';

@Injectable()
export class SeguindoService {
  constructor(private prisma: PrismaService) {}
  create(createSeguindoDto: Prisma.SeguindoCreateInput): Promise<Seguindo> {
    return this.prisma.seguindo.create({
      data: { ...createSeguindoDto },
    });
  }

  findAll(): Promise<Seguindo[]> {
    return this.prisma.seguindo.findMany();
  }

  findOne(id: number): Promise<Seguindo[]> {
    return this.prisma.seguindo.findMany({
      where: { usuarioId: id },
    });
  }

  update(
    id: number,
    updateSeguindoDto: Prisma.SeguindoUpdateInput,
  ): Promise<Seguindo> {
    return this.prisma.seguindo.update({
      where: { id },
      data: { ...updateSeguindoDto },
    });
  }

  remove(id: number) {
    return this.prisma.seguindo.delete({ where: { id } });
  }
}
