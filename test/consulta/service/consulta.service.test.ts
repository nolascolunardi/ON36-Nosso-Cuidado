import { ConsultaService } from "../../../src/consulta/application/consulta.service";
import { ConsultaRepository } from "../../../src/consulta/application/ports/consulta.repository";
import { PontuacaoService } from "../../../src/pontuacao/application/pontuacao.service";
import { Test, TestingModule } from "@nestjs/testing";
import { PessoaService } from "../../../src/pessoa/application/pessoa.service";
import { pessoaMock } from "../../__mocks__/pessoa.mock";
import {
  consultaDto,
  consultaRetornoBanco, criarConsultaDto

} from "../../__mocks__/consulta.mock";

let service : ConsultaService;
let repository : ConsultaRepository;
let pontuacaoService : PontuacaoService;
let pessoaService : PessoaService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      ConsultaService,
      {
        provide: ConsultaRepository,
        useValue: {
          salvar: jest.fn(),
          deletar: jest.fn(),
          listarTodas: jest.fn(),
          buscarPorId: jest.fn(),
          buscarPorEmail: jest.fn(),
          listarTodosPorPessoa: jest.fn(),
          atualizar: jest.fn(),
        },
      },
      {
        provide: PontuacaoService,
        useValue: {
          contabilizarPontuacao: jest.fn(),
        },
      },
      {
        provide: PessoaService,
        useValue: {
          buscarPorEmail: jest.fn(),
        },
      },
    ],
  }).compile();

  service = module.get<ConsultaService>(ConsultaService);
  repository = module.get<ConsultaRepository>(ConsultaRepository);
  pontuacaoService = module.get<PontuacaoService>(PontuacaoService);
  pessoaService = module.get<PessoaService>(PessoaService);
});

describe('ConsultaService', () => {
  describe('criar', () => {
    it('deve criar uma nova Consulta', async () => {
      jest.spyOn(pessoaService, 'buscarPorEmail').mockResolvedValue(pessoaMock);
      jest.spyOn(repository, 'salvar').mockResolvedValue(consultaRetornoBanco);

      const result = await service.criar(criarConsultaDto);
      console.log(result);
      console.log(consultaDto);

      expect(result).toEqual(consultaDto);
    });
  });
});