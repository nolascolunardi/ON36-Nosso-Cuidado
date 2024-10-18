import { PessoaService } from './pessoa.service';
import { PessoaRepository } from './ports/pessoa.repository';
import { PessoaTypeOrmRepository } from '../infrastructure/typeOrm/pessoaTypeOrm.repository';
import { PessoaController } from '../presenter/pessoa.controller';

export const pessoaProviders = [
  PessoaService,
  {
    provide: PessoaRepository,
    useClass: PessoaTypeOrmRepository,
  },
  PessoaController,
];
