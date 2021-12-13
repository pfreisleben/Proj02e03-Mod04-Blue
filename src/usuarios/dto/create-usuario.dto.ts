import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  imagem: string;

  @IsString()
  @IsNotEmpty()
  bio: string;

  @IsDateString()
  @IsNotEmpty()
  nascimento: Date;
}
