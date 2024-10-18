import { Pontuacao } from '../../domain/pontuacao.entity';

export class PontuacaoDto {
  pessoaNome: string;
  totalPontos: number;
  atualizadoEm: Date;

  constructor(pontuacao: Pontuacao) {
    this.pessoaNome = pontuacao.pessoa.nomeCompleto;
    this.totalPontos = pontuacao.pontos;
    this.atualizadoEm = pontuacao.atualizadoEm;
  }
}
