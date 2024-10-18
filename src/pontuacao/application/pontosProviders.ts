import { PontuacaoService } from './pontuacao.service';
import { PontuacaoRepository } from './ports/pontuacao.repository';
import { PontuacaoTypeOrmRepository } from '../infrastructure/pontuacaoTypeOrm.repository';
import { PontuacaoController } from '../presenter/pontuacao.controller';

export const pontoProviders = [
  PontuacaoService,
  {
    provide: PontuacaoRepository,
    useClass: PontuacaoTypeOrmRepository,
  },
  PontuacaoController,
];
