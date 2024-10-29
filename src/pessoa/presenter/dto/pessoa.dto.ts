import { Pessoa } from '../../domain/pessoa.entity';
import { ApiProperty } from "@nestjs/swagger";

export class PessoaDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  data_nascimento: Date;
  @ApiProperty()
  telefone: string;
  @ApiProperty()
  semanas_gestacao: number;
  @ApiProperty()
  medico_responsavel: string;
  @ApiProperty()
  endereco: string;
  @ApiProperty()
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
