import 'dotenv/config';
import { Module } from '@nestjs/common';
import { EnderecoModule } from './endereco/application/endereco.module';
import { ConfigModule } from '@nestjs/config/dist';
import { EnfermeiraModule } from './enfermeira/application/enfermeira.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ConsultaModule } from './consulta/application/consulta.module';
import { DbModule } from './config/database/data-source.module';
import { PontuacaoModule } from './pontuacao/application/pontuacao.module';
import { PessoaModule } from './pessoa/application/pessoa.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PontuacaoModule,
    PessoaModule,
    EnderecoModule,
    EnfermeiraModule,
    UsuarioModule,
    ConsultaModule,
    DbModule,
  ],
})
export class AppModule {}
