import { Module } from '@nestjs/common';
import { CategoriaTweetService } from './categoria-tweet.service';
import { CategoriaTweetController } from './categoria-tweet.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CategoriaTweetController],
  providers: [CategoriaTweetService, PrismaService]
})
export class CategoriaTweetModule {}
