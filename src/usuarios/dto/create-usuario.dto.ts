import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsEmail,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

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
