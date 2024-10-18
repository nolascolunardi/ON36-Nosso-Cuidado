import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { CriarEnderecoDto } from '../../../endereco/presenter/dto/criar-endereco.dto';
import { Pessoa } from '../../domain/pessoa.entity';
import { Endereco } from '../../../endereco/domain/endereco.entity';
import { Pontuacao } from '../../../pontuacao/domain/pontuacao.entity';

export class CriarPessoaDto {
  //usuario
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  senha: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  telefone: string;

  //pessoa
  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  dataNascimento: string;

  @IsNotEmpty()
  @IsNumber()
  semanasGestacao: number;

  @IsNotEmpty()
  @IsString()
  medicoResponsavel: string;

  //endereco
  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  logradouro: string;

  @IsNotEmpty()
  @IsString()
  numero: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;

  @IsNotEmpty()
  @IsString()
  pais: string;

  toEnderecoDto(): CriarEnderecoDto {
    return new CriarEnderecoDto(
      this.cep,
      this.logradouro,
      this.numero,
      this.bairro,
      this.cidade,
      this.estado,
      this.pais,
    );
  }

  toEntity(endereco: Endereco, pontuacao: Pontuacao): Pessoa {
    return new Pessoa(
      this.nome,
      this.email,
      this.senha,
      this.telefone,
      this.cpf,
      new Date(this.dataNascimento),
      this.semanasGestacao,
      this.medicoResponsavel,
      endereco,
      pontuacao,
    );
  }
}
