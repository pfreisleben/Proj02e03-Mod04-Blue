import {
  IsString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
export class CreateFavoritoTweetDto {

  @IsInt()
  @IsNotEmpty()
  tweetId: number;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
