import { Endereco } from '../../domain/endereco.entity';

export abstract class ValidadorCep {
  abstract buscar(cep: string): Promise<JSON>;
  abstract validar(endereco: Endereco): Promise<boolean>;
}
