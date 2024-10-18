import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontuacaoController } from '../presenter/pontuacao.controller';
import { pontoProviders } from './pontosProviders';
import { PessoaModule } from '../../pessoa/application/pessoa.module';
import { Pontuacao } from '../domain/pontuacao.entity';

@Module({
  controllers: [PontuacaoController],
  imports: [TypeOrmModule.forFeature([Pontuacao]), forwardRef(() => PessoaModule)],
  providers: pontoProviders,
  exports: pontoProviders,
})
export class PontuacaoModule {}
