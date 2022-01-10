import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateSeguindoDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsString()
  @IsNotEmpty()
  nome: string;
}
