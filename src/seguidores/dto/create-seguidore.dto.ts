import { IsNotEmpty, IsInt } from 'class-validator';
export class CreateSeguidoreDto {
  @IsInt()
  @IsNotEmpty()
  idSeguidor: number;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
