import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Enfermeira } from '../domain/enfermeira.entity';
import { EnfermeiraRepository } from '../application/ports/enfermeira.repository';

export class EnfermeiraTypeOrmRepository extends EnfermeiraRepository {
  constructor(
    @InjectRepository(Enfermeira)
    private readonly enfermeiraRepository: Repository<Enfermeira>,
  ) {
    super();
  }

  async salvar(enfermeira: Enfermeira): Promise<Enfermeira> {
    return await this.enfermeiraRepository.save(enfermeira);
  }

  async listarTodos(): Promise<Enfermeira[]> {
    return await this.enfermeiraRepository.find({
      where: { isAtivo: true },
    });
  }

  async atualizar(enfermeira: Enfermeira): Promise<Enfermeira> {
    return await this.enfermeiraRepository.save(enfermeira);
  }

  async deletar(enfermeira: Enfermeira): Promise<void> {
    enfermeira.isAtivo = false;
    await this.enfermeiraRepository.save(enfermeira);
  }

  async buscarPorCpf(cpf: string): Promise<Enfermeira> {
    return await this.enfermeiraRepository.findOne({
      where: { cpf: cpf },
    });
  }

  async buscarPorEmail(email: string): Promise<Enfermeira> {
    return await this.enfermeiraRepository.findOne({
      where: { email: email },
    });
  }
}
