import { forwardRef, Module } from '@nestjs/common';
import { PessoaController } from '../presenter/pessoa.controller';
import { pessoaProviders } from './pessoaProviders';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from '../domain/pessoa.entity';
import { EnderecoModule } from '../../endereco/application/endereco.module';
import { PontuacaoModule } from '../../pontuacao/application/pontuacao.module';

@Module({
  controllers: [PessoaController],
  providers: pessoaProviders,
  imports: [
    TypeOrmModule.forFeature([Pessoa]),
    EnderecoModule,
    forwardRef(() => PontuacaoModule),
  ],
  exports: pessoaProviders,
})
export class PessoaModule {}
