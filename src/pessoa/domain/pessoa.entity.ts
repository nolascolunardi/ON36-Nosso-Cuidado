import { Usuario } from '../../usuario/usuario.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Endereco } from '../../endereco/domain/endereco.entity';
import { Pontuacao } from '../../pontuacao/domain/pontuacao.entity';
import { TipoUsuario } from '../../usuario/enum/tipoUsuario';
import { Consulta } from '../../consulta/domain/consulta.entity';

//pessoa que gesta <3
@Entity('pessoa')
export class Pessoa extends Usuario {
  @Column()
  cpf: string;
  @Column()
  dataNascimento: Date;
  @Column()
  semanasGestacao: number;
  @Column()
  medicoResponsavel: string;

  @OneToOne(() => Endereco, { cascade: true })
  @JoinColumn()
  endereco: Endereco;

  @OneToOne(() => Pontuacao, (pontuacao) => pontuacao.pessoa)
  pontuacao: Pontuacao;

  @OneToMany(() => Consulta, (consulta) => consulta.pessoa)
  consultas: Consulta[];

  constructor(
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    cpf: string,
    dataNascimento: Date,
    semanasGestacao: number,
    medicoResponsavel: string,
    endereco: Endereco,
    pontuacao: Pontuacao,
  ) {
    super(TipoUsuario.PESSOA, nome, email, senha, telefone);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.semanasGestacao = semanasGestacao;
    this.medicoResponsavel = medicoResponsavel;
    this.endereco = endereco;
    this.pontuacao = pontuacao;
  }
}
