import {
  IsString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
export class CreateFavoritoTweetDto {
  @IsInt()
  @IsNotEmpty()
  tweetId: number;

  @IsString()
  @IsNotEmpty()
  assignedBy: string;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
