import { Usuario } from '../../usuario/usuario.entity';
import { Column, Entity } from 'typeorm';
import { TipoUsuario } from '../../usuario/enum/tipoUsuario';

@Entity('enfermeira')
export class Enfermeira extends Usuario {
  @Column()
  coren: string;
  @Column()
  cpf: string;
  @Column()
  unidadeDeAtendimento: string;
  @Column()
  descricao: string;

  constructor(
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    coren: string,
    cpf: string,
    unidadeDeTrabalho: string,
    descricao: string,
  ) {
    super(TipoUsuario.ENFERMEIRA, nome, email, senha, telefone);
    this.coren = coren;
    this.cpf = cpf;
    this.unidadeDeAtendimento = unidadeDeTrabalho;
    this.descricao = descricao;
  }
}
