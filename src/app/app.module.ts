import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { FavoritoTweetModule } from 'src/favorito-tweet/favorito-tweet.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeguidoresModule } from 'src/seguidores/seguidores.module';
import { SeguindoModule } from 'src/seguindo/seguindo.module';
import { TweetsModule } from 'src/tweets/tweets.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    UsuariosModule,
    PrismaModule,
    SeguidoresModule,
    SeguindoModule,
    TweetsModule,
    AuthModule,
    FavoritoTweetModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
