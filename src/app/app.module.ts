import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeguidoresModule } from 'src/seguidores/seguidores.module';
import { SeguindoModule } from 'src/seguindo/seguindo.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule, PrismaModule, SeguidoresModule, SeguindoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
