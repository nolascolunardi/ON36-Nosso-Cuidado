import { EnderecoService } from './endereco.service';
import { ValidadorCep } from './ports/validadorCep';
import { ViaCep } from '../infrastructure/validadorCep/viaCep';
import { EnderecoRepository } from '../infrastructure/typeORM/endereco.repository';

export const enderecoProviders = [
  EnderecoService,
  {
    provide: ValidadorCep,
    useClass: ViaCep,
  },
  EnderecoRepository,
];
