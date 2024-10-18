import { ServiceUnavailableException } from '@nestjs/common';
import { ValidadorCep } from '../../application/ports/validadorCep';
import { Endereco } from '../../domain/endereco.entity';

export class ViaCep extends ValidadorCep {
  async buscar(cep: string): Promise<JSON> {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!resposta.ok) {
      throw new ServiceUnavailableException('Erro ao buscar CEP');
    }

    return await resposta.json();
  }

  async validar(endereco: Endereco): Promise<boolean> {
    const cepJson = await this.buscar(endereco.cep);

    if (cepJson['erro']) {
      return false;
    }
    if (cepJson['estado'] !== endereco.estado) {
      return false;
    }
    if (cepJson['localidade'] !== endereco.cidade) {
      return false;
    }

    return true;
  }
}
