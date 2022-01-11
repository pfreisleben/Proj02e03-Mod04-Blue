import {
  IsString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
export class CreateCategoriaTweetDto {

  @IsInt()
  @IsNotEmpty()
  tweetId: number;

  @IsString()
  @IsNotEmpty()
  assignedBy: string;

  @IsInt()
  @IsNotEmpty()
  categoriaId: number;
}
