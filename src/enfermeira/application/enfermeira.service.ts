import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CriarEnfermeiraDto } from '../presenter/dto/criar-enfermeira.dto';
import { Enfermeira } from '../domain/enfermeira.entity';
import { EnfermeiraRepository } from './ports/enfermeira.repository';

@Injectable()
export class EnfermeiraService {
  constructor(private readonly enfermeiraRepository: EnfermeiraRepository) {}

  async criar(criarEnfermeiraDto: CriarEnfermeiraDto): Promise<Enfermeira> {
    await this.validarCpf(criarEnfermeiraDto.cpf);
    await this.validarEmail(criarEnfermeiraDto.email);

    const enfermeira = criarEnfermeiraDto.toEntity();

    return await this.enfermeiraRepository.salvar(enfermeira);
  }

  async validarCpf(cpf: string): Promise<void> {
    const cpfEncontrado = await this.enfermeiraRepository.buscarPorCpf(cpf);
    if (cpfEncontrado) {
      throw new ForbiddenException('Cpf inválido');
    }
  }

  async validarEmail(email: string): Promise<void> {
    const emailEncontrado =
      await this.enfermeiraRepository.buscarPorEmail(email);
    if (emailEncontrado) {
      throw new ForbiddenException('Email inválido');
    }
  }
  async listarTodos(): Promise<Enfermeira[]> {
    const enfermeiras = await this.enfermeiraRepository.listarTodos();
    if (!enfermeiras || enfermeiras.length === 0) {
      throw new NotFoundException('Nenhuma enfermeira encontrada');
    }
    return enfermeiras;
  }
}
