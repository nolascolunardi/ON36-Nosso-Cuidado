import { Enfermeira } from '../../domain/enfermeira.entity';

export abstract class EnfermeiraRepository {
  abstract salvar(enfermeira: Enfermeira): Promise<Enfermeira>;
  abstract listarTodos(): Promise<Enfermeira[]>;
  abstract atualizar(enfermeira: Enfermeira): Promise<Enfermeira>;
  abstract deletar(enfermeira: Enfermeira): Promise<void>;
  abstract buscarPorCpf(cpf: string): Promise<Enfermeira>;
  abstract buscarPorEmail(email: string): Promise<Enfermeira>;
}
