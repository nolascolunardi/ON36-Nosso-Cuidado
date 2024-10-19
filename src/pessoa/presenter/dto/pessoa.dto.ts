import { Pessoa } from '../../domain/pessoa.entity';

export class PessoaDto {
  nome: string;
  email: string;
  data_nascimento: Date;
  telefone: string;
  semanas_gestacao: number;
  medico_responsavel: string;
  endereco: string;
  total_pontos: number;

  constructor(pessoa: Pessoa) {
    this.nome = pessoa.nomeCompleto;
    this.email = pessoa.email;
    this.data_nascimento = pessoa.dataNascimento;
    this.telefone = pessoa.telefone;
    this.semanas_gestacao = pessoa.semanasGestacao;
    this.medico_responsavel = pessoa.medicoResponsavel;
    this.endereco = pessoa.endereco.logradouro;
    this.total_pontos = pessoa.pontuacao.pontos;
  }
}
