import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CriarPessoaDto } from '../presenter/dto/criar-pessoa.dto';
import { AtualizarPessoaDto } from '../presenter/dto/atualizar-pessoa.dto';
import { PessoaRepository } from './ports/pessoa.repository';
import { EnderecoService } from '../../endereco/application/endereco.service';
import { PontuacaoService } from '../../ponto/application/pontuacao.service';
import { PessoaDto } from "../presenter/dto/pessoa.dto";

@Injectable()
export class PessoaService {
  constructor(
    private readonly pessoaRepository: PessoaRepository,
    private readonly enderecoService: EnderecoService,
    @Inject(forwardRef(() => PontuacaoService))
    private readonly pontuacaoService: PontuacaoService,
  ) {}

  async criar(criarPessoaDto: CriarPessoaDto): Promise<PessoaDto> {
    await this.validarCpf(criarPessoaDto.cpf);
    await this.validarEmail(criarPessoaDto.email);

    const endereco = await this.enderecoService.criar(criarPessoaDto.toEnderecoDto());
    const ponto = await this.pontuacaoService.criarPontuacao();

    const novaPessoa = criarPessoaDto.toEntity(endereco, ponto);
    const pessoa = await this.pessoaRepository.salvar(novaPessoa);
    return new PessoaDto(pessoa);
  }

  async validarCpf(cpf: string) {
    const pessoa = await this.pessoaRepository.buscarPorCpf(cpf);
    if (pessoa) {
      throw new ForbiddenException('CPF já cadastrado');
    }
  }

  async validarEmail(email: string) {
    const pessoa = await this.pessoaRepository.buscarPorEmail(email);
    if (pessoa) {
      throw new ForbiddenException('E-mail já cadastrado');
    }
  }

  async buscarPorEmail(email: string) {
    const pessoa = await this.pessoaRepository.buscarPorEmail(email);
    if (!pessoa) {
      throw new NotFoundException('Mãe não encontrada');
    }
    return pessoa;
  }

  async listarTodos(): Promise<PessoaDto[]> {
    const pessoas = await this.pessoaRepository.listarTodas();
    if (!pessoas || pessoas.length === 0) {
      throw new NotFoundException('Nenhuma mãe encontrada');
    }
    return pessoas.map((pessoa) => new PessoaDto(pessoa));
  }

  async atualizarInformacoes(email: string, updatePessoaDto: Partial<AtualizarPessoaDto>) {
    const pessoa = await this.buscarPorEmail(email);
    const pessoaAtualizada = await this.pessoaRepository.atualizar(pessoa.id, updatePessoaDto);
    return new PessoaDto(pessoaAtualizada);
  }

  async deletar(email: string) {
    const pessoa = await this.pessoaRepository.buscarPorEmail(email);
    if (!pessoa) {
      throw new NotFoundException('Mãe não encontrada');
    }
    await this.pessoaRepository.deletar(pessoa.email);
  }
}
