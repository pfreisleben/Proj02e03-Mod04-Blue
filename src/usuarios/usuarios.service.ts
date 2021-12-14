import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return await this.prisma.usuario.create({
      data: { ...data },
    });
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario | undefined> {
    return await this.prisma.usuario.findFirst({ where: { id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.prisma.usuario.update({
      where: { id },
      data: { ...updateUsuarioDto },
    });
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}
