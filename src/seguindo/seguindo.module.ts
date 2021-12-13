import { Module } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { SeguindoController } from './seguindo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SeguindoController],
  providers: [SeguindoService, PrismaService],
  imports: [PrismaService],
})
export class SeguindoModule {}
