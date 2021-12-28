import { IsNotEmpty, IsInt } from 'class-validator';
export class CreateTweetDto {
  @IsInt()
  @IsNotEmpty()
  idSeguidor: number;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
