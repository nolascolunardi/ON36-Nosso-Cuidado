import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontuacaoController } from '../presenter/pontuacao.controller';
import { pontuacaoProviders } from './pontuacaoProviders';
import { PessoaModule } from '../../pessoa/application/pessoa.module';
import { Pontuacao } from '../domain/pontuacao.entity';

@Module({
  controllers: [PontuacaoController],
  imports: [
    TypeOrmModule.forFeature([Pontuacao]),
    forwardRef(() => PessoaModule),
  ],
  providers: pontuacaoProviders,
  exports: pontuacaoProviders,
})
export class PontuacaoModule {}
