import { Consulta } from '../../domain/consulta.entity';

export abstract class ConsultaRepository {
  abstract salvar(consulta: Consulta): Promise<Consulta>;
  abstract listarTodas(): Promise<Consulta[]>;
  abstract buscarPorId(id: string): Promise<Consulta>;
  abstract atualizar(id: string, consulta: Consulta): Promise<Consulta>;
  abstract deletar(id: string): Promise<void>;
}
