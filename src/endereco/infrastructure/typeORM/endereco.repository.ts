import { Endereco } from '../../domain/endereco.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class EnderecoRepository {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  async salvar(endereco: Endereco): Promise<Endereco> {
    return await this.enderecoRepository.save(endereco);
  }

  async atualizar(endereco: Endereco): Promise<Endereco> {
    return this.enderecoRepository.save(endereco);
  }

  async listarTodos(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }
}
