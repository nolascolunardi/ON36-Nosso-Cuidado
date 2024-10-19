import { Enfermeira } from '../../domain/enfermeira.entity';

export class EnfermeiraDto {
  id: string;
  nome_completo: string;
  email: string;
  telefone: string;
  coren: string;
  unidade_de_atendimento: string;
  descricao: string;

  constructor(enfermeira: Enfermeira) {
    this.id = enfermeira.id;
    this.nome_completo = enfermeira.nomeCompleto;
    this.email = enfermeira.email;
    this.telefone = enfermeira.telefone;
    this.coren = enfermeira.coren;
    this.unidade_de_atendimento = enfermeira.unidadeDeAtendimento;
    this.descricao = enfermeira.descricao;
  }
}
