import { Entidade } from '../entidade/entidade';
import { Column } from 'typeorm';

export class Usuario extends Entidade {
  tipo: number;
  @Column()
  nomeCompleto: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  telefone: string;
  @Column({ name: 'is_ativo' })
  isAtivo: boolean;
  @Column({ name: 'criado_em' })
  criadoEm: Date;

  constructor(
    tipoUsuario: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
  ) {
    super();
    this.tipo = tipoUsuario;
    this.nomeCompleto = nome;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.isAtivo = true;
    this.criadoEm = new Date();
  }
}
