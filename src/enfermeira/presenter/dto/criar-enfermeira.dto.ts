import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Enfermeira } from '../../domain/enfermeira.entity';
import { ApiProperty } from "@nestjs/swagger";


export class CriarEnfermeiraDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nomeCompleto: string;

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

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  coren: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  @ApiProperty()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  unidadeDeAtendimento: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
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
