import { Module } from '@nestjs/common';
import { ConsultaController } from '../presenter/consulta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from '../domain/consulta.entity';
import { consultaProviders } from './consultaProviders';
import { PessoaModule } from '../../pessoa/application/pessoa.module';
import { PontuacaoModule } from '../../ponto/application/pontuacao.module';

@Module({
  controllers: [ConsultaController],
  providers: consultaProviders,
  imports: [TypeOrmModule.forFeature([Consulta]), PessoaModule, PontuacaoModule],
  exports: consultaProviders,
})
export class ConsultaModule {}
