import { IsNotEmpty, IsInt, IsString } from 'class-validator';
export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
