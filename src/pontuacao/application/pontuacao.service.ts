import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PontuacaoRepository } from './ports/pontuacao.repository';
import { PessoaService } from '../../pessoa/application/pessoa.service';
import { PontuacaoDto } from '../presenter/dto/pontuacao.dto';
import { Pontuacao } from '../domain/pontuacao.entity';
import { Consulta } from '../../consulta/domain/consulta.entity';
import { StatusEnum } from '../../utils/status.enum';
import { Pessoa } from '../../pessoa/domain/pessoa.entity';

@Injectable()
export class PontuacaoService {
  constructor(
    private readonly pontuacaoRepository: PontuacaoRepository,
    @Inject(forwardRef(() => PessoaService))
    private readonly pessoaService: PessoaService,
  ) {}

  async criarPontuacao(): Promise<Pontuacao> {
    const ponto = new Pontuacao(0);
    return await this.pontuacaoRepository.salvar(ponto);
  }

  async buscarPontuacao(email: string): Promise<PontuacaoDto> {
    const pessoa = await this.pessoaService.buscarPorEmail(email);
    const pontuacao = await this.pontuacaoRepository.buscarPontuacao(pessoa.id);
    return new PontuacaoDto(pontuacao);
  }

  async contabilizarPontuacao(consulta: Consulta): Promise<void> {
    return consulta.status === StatusEnum.REALIZADA
      ? await this.atualizarPontuacao(consulta.pessoa, consulta.pontos)
      : null;
  }

  async atualizarPontuacao(pessoa: Pessoa, pontos: number): Promise<void> {
    const pontuacao = await this.pontuacaoRepository.buscarPontuacao(pessoa.id);
    pontuacao.pontos += pontos;
    await this.pontuacaoRepository.atualizar(pontuacao.id, pontuacao);
  }
}
