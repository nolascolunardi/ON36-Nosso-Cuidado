import { Consulta } from '../../domain/consulta.entity';

export class ConsultaDTO {
  consulta_id: string;
  pessoa: string;
  status: string;
  data: Date;
  hora: string;
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
