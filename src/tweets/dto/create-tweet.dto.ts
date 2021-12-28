import { IsNotEmpty, IsInt, IsString } from 'class-validator';
export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  texto: string;

  @IsString()
  emoji:string;

  @IsInt()
  @IsNotEmpty()
  usuarioId: number;
}
