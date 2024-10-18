import { Pessoa } from '../../domain/pessoa.entity';
import { AtualizarPessoaDto } from '../../presenter/dto/atualizar-pessoa.dto';

export abstract class PessoaRepository {
  abstract salvar(pessoa: Pessoa): Promise<Pessoa>;
  abstract listarTodas(): Promise<Pessoa[]>;
  abstract atualizar(
    id: string,
    pessoa: Partial<AtualizarPessoaDto>,
  ): Promise<Pessoa>;
  abstract deletar(email: string): Promise<void>;
  abstract buscarPorCpf(cpf: string): Promise<Pessoa>;
  abstract buscarPorEmail(email: string): Promise<Pessoa>;
}
