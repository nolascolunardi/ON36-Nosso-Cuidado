import { Consulta } from '../../domain/consulta.entity';
import { ApiProperty } from "@nestjs/swagger";

export class ConsultaDTO {
  @ApiProperty()
  consulta_id: string;
  @ApiProperty()
  pessoa: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  data: Date;
  @ApiProperty()
  hora: string;
  @ApiProperty()
  tipo: string;

  constructor(entity: Consulta) {
    this.consulta_id = entity.id;
    this.pessoa = entity.pessoa.nomeCompleto;
    this.status = entity.status;
    this.data = entity.dataConsulta;
    this.hora = entity.horaConsulta;
    this.tipo = entity.tipoConsulta;
  }
}
