import { Pontuacao } from '../../domain/pontuacao.entity';

export class PontuacaoDto {
  pessoa_nome: string;
  total_pontos: number;
  atualizado_em: Date;

  constructor(pontuacao: Pontuacao) {
    this.pessoa_nome = pontuacao.pessoa.nomeCompleto;
    this.total_pontos = pontuacao.pontos;
    this.atualizado_em = pontuacao.atualizadoEm;
  }
}
