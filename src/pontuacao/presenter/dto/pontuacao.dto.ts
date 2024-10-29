import { Pontuacao } from '../../domain/pontuacao.entity';
import { ApiProperty } from "@nestjs/swagger";

export class PontuacaoDto {
  @ApiProperty()
  pessoa_nome: string;
  @ApiProperty()
  total_pontos: number;
  @ApiProperty()
  atualizado_em: Date;

  constructor(pontuacao: Pontuacao) {
    this.pessoa_nome = pontuacao.pessoa.nomeCompleto;
    this.total_pontos = pontuacao.pontos;
    this.atualizado_em = pontuacao.atualizadoEm;
  }
}
