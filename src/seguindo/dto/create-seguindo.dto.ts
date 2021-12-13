import { IsInt, IsNotEmpty } from 'class-validator';
export class CreateSeguindoDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsInt()
  @IsNotEmpty()
  idSeguindo: number;
}
