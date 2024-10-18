import { Entidade } from '../../entidade/entidade';
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Pessoa } from '../../pessoa/domain/pessoa.entity';

@Entity('pontuacao')
export class Pontuacao extends Entidade {
  @Column()
  pontos: number;

  @Column()
  atualizadoEm: Date;

  @OneToOne(() => Pessoa, (pessoa) => pessoa.pontuacao)
  @JoinColumn()
  pessoa: Pessoa;

  constructor(pontos: number) {
    super();
    this.pontos = pontos;
    this.atualizadoEm = new Date();
  }
}
