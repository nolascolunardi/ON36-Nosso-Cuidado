import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Enfermeira } from '../../domain/enfermeira.entity';

export class CriarEnfermeiraDto {
  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

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

  @IsNotEmpty()
  @IsString()
  coren: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  unidadeDeAtendimento: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  toEntity() {
    return new Enfermeira(
      this.nomeCompleto,
      this.email,
      this.senha,
      this.telefone,
      this.coren,
      this.cpf,
      this.unidadeDeAtendimento,
      this.descricao,
    );
  }
}
