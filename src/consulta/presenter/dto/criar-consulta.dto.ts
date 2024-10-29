import { IsDate, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Consulta } from '../../domain/consulta.entity';
import { Pessoa } from '../../../pessoa/domain/pessoa.entity';
import { ApiProperty } from "@nestjs/swagger";

export class CriarConsultaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  tipoConsulta: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dataConsulta: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  horaConsulta: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  pessoaEmail: string;

  toEntity(pessoa: Pessoa) {
    return new Consulta(
      this.tipoConsulta,
      new Date(this.dataConsulta),
      this.horaConsulta,
      pessoa,
    );
  }
}
