import { Pessoa } from '../../src/pessoa/domain/pessoa.entity';

export const pessoaMock = {
  id: '147a147aaaaaaa',
  nomeCompleto: 'Nome Completo',
  email: 'pessoa@ex.com',
  senha: '123456',
  telefone: '11999999999',
  cpf: '12345678901',
  dataNascimento: '2021-09-01',
  semanasGestacao: 10,
  medicoResponsavel: 'Dr. Médico',
  endereco: {
    cep: '12345678',
    logradouro: 'Rua Teste',
    numero: '123',
    complemento: 'apto 123',
    bairro: 'Bairro Teste',
    cidade: 'Cidade Teste',
    estado: 'SP'
  },
  pontuacao: {
    pontos: 0
  }
} as unknown as Pessoa;