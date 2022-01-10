import { PartialType } from '@nestjs/swagger';
import { CreateFavoritoTweetDto } from './create-favorito-tweet.dto';

export class UpdateFavoritoTweetDto extends PartialType(CreateFavoritoTweetDto) {}
