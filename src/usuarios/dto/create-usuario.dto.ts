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
  @IsString()
  sobrenome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsOptional()
  @IsString()
  sobre: string;

  @IsDateString()
  @IsNotEmpty()
  aniversario: string;
}
