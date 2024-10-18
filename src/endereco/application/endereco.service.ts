import { ForbiddenException, Injectable } from '@nestjs/common';
import { Endereco } from '../domain/endereco.entity';
import { CriarEnderecoDto } from '../presenter/dto/criar-endereco.dto';
import { ValidadorCep } from './ports/validadorCep';
import { EnderecoRepository } from '../infrastructure/typeORM/endereco.repository';

@Injectable()
export class EnderecoService {
  constructor(
    private readonly enderecoRepository: EnderecoRepository,
    private readonly buscarCep: ValidadorCep,
  ) {}

  async criar(enderecoDto: CriarEnderecoDto): Promise<Endereco> {
    const endereco = enderecoDto.toEntity();
    const cepValido = await this.validarCep(endereco);

    if (!cepValido) {
      throw new ForbiddenException('CEP inválido');
    }

    return await this.enderecoRepository.salvar(endereco);
  }

  async validarCep(endereco: Endereco): Promise<boolean> {
    if (endereco.pais !== 'Brasil') {
      throw new ForbiddenException('Endereço fora do Brasil');
    }
    return await this.buscarCep.validar(endereco);
  }

  async listarTodos(): Promise<Endereco[]> {
    return await this.enderecoRepository.listarTodos();
  }
}
