import { ConsultaRepository } from '../application/ports/consulta.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from '../domain/consulta.entity';

export class ConsultaTypeOrmRepository extends ConsultaRepository {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
  ) {
    super();
  }

  async salvar(consulta: Consulta): Promise<Consulta> {
    return await this.consultaRepository.save(consulta);
  }

  async listarTodas(id: string): Promise<Consulta[]> {
    return await this.consultaRepository.find({ where: { pessoa: { id: id } } });
  }

  async buscarPorId(id: string): Promise<Consulta> {
    return await this.consultaRepository.findOne({
      where: { id },
      relations: ['pessoa'],
    });
  }

  async atualizar(id: string, consulta: Consulta): Promise<Consulta> {
    await this.consultaRepository.update(id, consulta);
    return await this.consultaRepository.findOne({
      where: { id },
    });
  }

  async deletar(id: string): Promise<void> {
    await this.consultaRepository.delete(id);
  }
}
