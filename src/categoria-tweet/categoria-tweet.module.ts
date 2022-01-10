import { Module } from '@nestjs/common';
import { CategoriaTweetService } from './categoria-tweet.service';
import { CategoriaTweetController } from './categoria-tweet.controller';

@Module({
  controllers: [CategoriaTweetController],
  providers: [CategoriaTweetService]
})
export class CategoriaTweetModule {}
