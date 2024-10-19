import { PessoaRepository } from '../../application/ports/pessoa.repository';
import { Pessoa } from '../../domain/pessoa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AtualizarPessoaDto } from '../../presenter/dto/atualizar-pessoa.dto';

export class PessoaTypeOrmRepository extends PessoaRepository {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {
    super();
  }

  async salvar(pessoa: Pessoa): Promise<Pessoa> {
    return await this.pessoaRepository.save(pessoa);
  }

  async atualizar(
    id: string,
    pessoa: Partial<AtualizarPessoaDto>,
  ): Promise<Pessoa> {
    await this.pessoaRepository.update({ id }, pessoa);
    return await this.pessoaRepository.findOne({
      where: { id },
      relations: ['endereco', 'pontuacao'],
    });
  }

  async listarTodas(): Promise<Pessoa[]> {
    return await this.pessoaRepository.find({
      relations: ['endereco', 'pontuacao'],
      where: { isAtivo: true },
    });
  }

  async deletar(email: string): Promise<void> {
    await this.pessoaRepository.update({ email }, { isAtivo: false });
  }

  async buscarPorCpf(cpf: string): Promise<Pessoa> {
    return await this.pessoaRepository.findOne({
      where: { cpf, isAtivo: true },
      relations: ['endereco', 'pontuacao'],
    });
  }

  async buscarPorEmail(email: string): Promise<Pessoa> {
    return await this.pessoaRepository.findOne({
      where: { email, isAtivo: true },
      relations: ['endereco', 'pontuacao'],
    });
  }
}
