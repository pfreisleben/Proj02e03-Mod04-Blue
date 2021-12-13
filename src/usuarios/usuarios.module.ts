import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [PrismaService],
})
export class UsuariosModule {}
