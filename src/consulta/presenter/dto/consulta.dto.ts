import { Consulta } from '../../domain/consulta.entity';

export class ConsultaDTO {
  consultaId: string;
  data: Date;
  hora: string;
  pessoa: string;
  status: string;
  tipo: string;

  constructor(entity: Consulta) {
    this.consultaId = entity.id;
    this.data = entity.dataConsulta;
    this.hora = entity.horaConsulta;
    this.pessoa = entity.pessoa.id;
    this.status = entity.status;
    this.tipo = entity.tipoConsulta;
  }
}
