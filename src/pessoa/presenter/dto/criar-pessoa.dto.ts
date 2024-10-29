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
import { ApiProperty } from "@nestjs/swagger";

export class CriarPessoaDto {
  //usuario

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  @ApiProperty()
  senha: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  @ApiProperty()
  telefone: string;

  //pessoa
  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  @ApiProperty()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dataNascimento: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  semanasGestacao: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  medicoResponsavel: string;

  //endereco
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  cep: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  logradouro: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  numero: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  estado: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
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
