import { IsNotEmpty, IsInt, IsString } from 'class-validator';
export class CreateSeguidoreDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
