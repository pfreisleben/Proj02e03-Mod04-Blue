import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TweetsController, PrismaService],
  providers: [TweetsService],
})
export class TweetsModule {}
