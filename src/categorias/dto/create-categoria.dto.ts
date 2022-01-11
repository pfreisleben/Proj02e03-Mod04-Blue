import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
export class CreateCategoriaDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

}
