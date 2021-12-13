import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: { ...data },
    });
  }

  findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  findOne(id: number): Promise<Usuario> {
    return this.prisma.usuario.findFirst({ where: { id } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: { ...updateUsuarioDto },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
