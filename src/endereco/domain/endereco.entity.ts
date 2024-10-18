import { Column, Entity, OneToOne } from 'typeorm';
import { Entidade } from '../../entidade/entidade';
import { Pessoa } from '../../pessoa/domain/pessoa.entity';

@Entity('endereco')
export class Endereco extends Entidade {
  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  pais: string;


  constructor(
    cep: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
  ) {
    super();
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
  }
}
