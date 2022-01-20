import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUsuarioDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: data.email,
      },
    });
    if(user) {
      throw new HttpException('Email já cadastrado!', HttpStatus.BAD_REQUEST)
    }
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.create({ data });

  }

  async findByLogin(login: LoginDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    });

    if (!user) {
      throw new HttpException('usuario nao encontrado', HttpStatus.NOT_FOUND);
    }

    const senhaIgual = await bcrypt.compare(login.senha, user.senha);

    if (!senhaIgual) {
      throw new HttpException('senha invalida', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario | undefined> {
    return await this.prisma.usuario.findFirst({ where: { id } });
  }

  async update(id: number, data: UpdateUsuarioDto) {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.update({
      where: { id },
      data: { ...data },
    });
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}
