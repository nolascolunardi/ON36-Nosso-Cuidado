import { Column, Entity, ManyToOne } from 'typeorm';
import { Pessoa } from '../../pessoa/domain/pessoa.entity';
import { StatusEnum } from '../../utils/status.enum';
import { Entidade } from '../../entidade/entidade';

@Entity('consulta')
export class Consulta extends Entidade {
  @Column()
  tipoConsulta: string;

  @Column()
  pontos: number;

  @Column()
  dataConsulta: Date;

  @Column()
  horaConsulta: string;

  @Column()
  status: StatusEnum;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.consultas)
  pessoa: Pessoa;

  constructor(
    tipoConsulta: string,
    dataConsulta: Date,
    horaConsulta: string,
    pessoa: Pessoa,
  ) {
    super();
    this.tipoConsulta = tipoConsulta;
    this.dataConsulta = dataConsulta;
    this.horaConsulta = horaConsulta;
    this.pessoa = pessoa;
    this.status = StatusEnum.PENDENTE;
  }
}
