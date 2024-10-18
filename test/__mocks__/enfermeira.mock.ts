import { Enfermeira } from '../../src/enfermeira/domain/enfermeira.entity';
import { CriarEnfermeiraDto } from '../../src/enfermeira/presenter/dto/criar-enfermeira.dto';

export const mockEnfermeiraDto = {
  nomeCompleto: 'Maria Clara Souza',
  email: 'maria.clara@ex.com',
  senha: 'senhaSegura123',
  telefone: '11987654321',
  coren: '123456',
  cpf: '12345678901',
  unidadeDeAtendimento: 'Hospital São Lucas',
  descricao: 'Enfermeira com 5 anos de experiência em atendimento clínico.',
  toEntity: () => mockEnfermeira,
} as unknown as CriarEnfermeiraDto;

export const mockEnfermeira = new Enfermeira(
  'Maria Clara Souza',
  'maria.clara@ex.com',
  'senhaSegura123',
  '11987654321',
  '123456',
  '12345678901',
  'Hospital São Lucas',
  'Enfermeira com 5 anos de experiência em atendimento clínico.',
);
