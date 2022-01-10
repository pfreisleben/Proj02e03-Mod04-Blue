import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaTweetDto } from './create-categoria-tweet.dto';

export class UpdateCategoriaTweetDto extends PartialType(CreateCategoriaTweetDto) {}
