import {
  IsString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
export class CreateCategoriaTweetDto {

  @IsInt()
  @IsNotEmpty()
  tweetId: number;

  @IsInt()
  @IsNotEmpty()
  categoriaId: number;
}
