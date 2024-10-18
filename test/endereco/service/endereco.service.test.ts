import { Test, TestingModule } from "@nestjs/testing";
import { EnderecoService } from "../../../src/endereco/application/endereco.service";
import { ValidadorCep } from "../../../src/endereco/application/ports/validadorCep";
import { EnderecoRepository } from "../../../src/endereco/infrastructure/typeORM/endereco.repository";
import { mockEndereco, mockEnderecoDto, mockEnderecoInvalidoDto } from "../../__mocks__/endereco.mock";
import { CriarEnderecoDto } from "../../../src/endereco/presenter/dto/criar-endereco.dto";
import { Endereco } from "../../../src/endereco/domain/endereco.entity";

let service: EnderecoService;
let repository: EnderecoRepository;
let validador: ValidadorCep;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      EnderecoService,
      {
        provide: EnderecoRepository,
        useValue: {
          salvar: jest.fn(),
          deletar: jest.fn(),
          listarTodos: jest.fn(), 
          atualizar: jest.fn(),
        },
      },
      {
        provide: ValidadorCep,
        useValue: {
          validar: jest.fn(),
        },
      },
    ],
  }).compile();

  service = module.get<EnderecoService>(EnderecoService);
  repository = module.get<EnderecoRepository>(EnderecoRepository);
  validador = module.get<ValidadorCep>(ValidadorCep);
});

describe('EnderecoService', () => {
  describe('criar', () => {
    it('deve criar um novo Endereco', async () => {
      jest.spyOn(repository, 'salvar').mockResolvedValue(mockEndereco);
      jest.spyOn(validador, 'validar').mockResolvedValue(true);

      const result = await service.criar(mockEnderecoDto);

      expect(result).toEqual(mockEndereco);
    });
    it('deve lançar uma exceção se o CEP for inválido para criar novo endereco', async () => {
      jest.spyOn(service, 'validarCep').mockResolvedValue(false);

      await expect(service.criar(mockEnderecoInvalidoDto)).rejects.toThrowError('CEP inválido');
    });
  });
  describe('validarCep', ()=> {
    it('deve validar um Cep válido', async () => {
      jest.spyOn(validador, 'validar').mockResolvedValue(true)

      const result = await service.validarCep(mockEndereco);

      expect(result).toBe(true);
    });
    it('deve retornar um erro ao validar um endereco com o pais diferente de Brasil', async () => {
      const enderecoInvalido = new Endereco(
        '12345678',
        'Sonhos',
        '777',
        'Bimbim',
        'Leao',
        'Luanda',
        'Narnia',
      );

      await expect(service.validarCep(enderecoInvalido)).rejects.toThrowError('Endereço fora do Brasil');
    });
  });
});