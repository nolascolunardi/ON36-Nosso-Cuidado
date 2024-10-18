import { Endereco } from '../../domain/endereco.entity';

export class CriarEnderecoDto {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;

  constructor(
    cep: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
  }

  toEntity(): Endereco {
    return new Endereco(
      this.cep,
      this.logradouro,
      this.numero,
      this.bairro,
      this.cidade,
      this.estado,
      this.pais,
    );
  }
}
