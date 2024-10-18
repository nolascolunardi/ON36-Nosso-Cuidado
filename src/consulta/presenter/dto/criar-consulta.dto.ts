import { IsDate, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Consulta } from '../../domain/consulta.entity';
import { Pessoa } from '../../../pessoa/domain/pessoa.entity';

export class CriarConsultaDto {
  @IsNotEmpty()
  tipoConsulta: string;

  @IsNotEmpty()
  @IsString()
  dataConsulta: string;

  @IsNotEmpty()
  @IsString()
  horaConsulta: string;

  @IsNotEmpty()
  @IsEmail()
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
