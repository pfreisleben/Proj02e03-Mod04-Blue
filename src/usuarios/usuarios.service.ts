import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Usuario } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: { ...createUsuarioDto },
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
