import { Pessoa } from '../../domain/pessoa.entity';

export class PessoaDto {
  nome: string;
  email: string;
  dataNascimento: Date;
  telefone: string;
  semanasGestacao: number;
  medicoResponsavel: string;
  endereco: string;
  totalPontos: number;

  constructor(pessoa: Pessoa) {
    this.nome = pessoa.nomeCompleto;
    this.email = pessoa.email;
    this.dataNascimento = pessoa.dataNascimento;
    this.telefone = pessoa.telefone;
    this.semanasGestacao = pessoa.semanasGestacao;
    this.medicoResponsavel = pessoa.medicoResponsavel;
    this.endereco = pessoa.endereco.logradouro;
    this.totalPontos = pessoa.pontuacao.pontos;
  }
}
