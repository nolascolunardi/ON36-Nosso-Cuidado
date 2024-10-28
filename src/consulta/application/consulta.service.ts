import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CriarConsultaDto } from '../presenter/dto/criar-consulta.dto';
import { PessoaService } from '../../pessoa/application/pessoa.service';
import { TIPOS_CONSULTA } from '../domain/enum/TipoConsulta.enum';
import { ConsultaRepository } from './ports/consulta.repository';
import { Consulta } from '../domain/consulta.entity';
import { AtualizarConsultaDto } from '../presenter/dto/atualizar-consulta.dto';
import { PontuacaoService } from '../../pontuacao/application/pontuacao.service';
import { StatusEnum } from '../../utils/status.enum';
import { ConsultaDTO } from '../presenter/dto/consulta.dto';
//socorro deus
@Injectable()
export class ConsultaService {
  constructor(
    private readonly consultaRepository: ConsultaRepository,
    private readonly pessoaService: PessoaService,
    private readonly pontosService: PontuacaoService,
  ) {}

  async criar(criarConsultaDto: CriarConsultaDto): Promise<ConsultaDTO> {
    const pessoa = await this.pessoaService.buscarPorEmail(
      criarConsultaDto.pessoaEmail,
    );
    const pontos = await this.validarTipoConsulta(
      criarConsultaDto.tipoConsulta,
    );

    const novaConsulta = criarConsultaDto.toEntity(pessoa);
    novaConsulta.pontos = pontos;
    const consulta = await this.consultaRepository.salvar(novaConsulta);
    return new ConsultaDTO(consulta);
  }

  async atualizarStatus(id: string, atualizarDto: AtualizarConsultaDto) {
    const consulta = await this.buscarPorId(id);
    await this.validarStatus(consulta.status, atualizarDto.status);

    consulta.status = atualizarDto.status;
    await this.pontosService.contabilizarPontuacao(consulta);

    const consultaAtualizada = await this.consultaRepository.atualizar(
      id,
      consulta,
    );
    return new ConsultaDTO(consultaAtualizada);
  }

  async buscarPorId(id: string): Promise<Consulta> {
    const consulta = await this.consultaRepository.buscarPorId(id);
    if (!consulta) {
      throw new NotFoundException('Consulta não encontrada');
    }
    return consulta;
  }

  async listarTodas(): Promise<ConsultaDTO[]> {
    const consultas = await this.consultaRepository.listarTodas();
    if (!consultas) {
      throw new NotFoundException('Nenhuma consulta encontrada');
    }
    return consultas.map((consulta) => new ConsultaDTO(consulta));
  }

  async listarTodasPorEmail(pessoaId: string): Promise<ConsultaDTO[]> {
    const consultas =
      await this.consultaRepository.listarTodosPorPessoa(pessoaId);
    if (!consultas) {
      throw new NotFoundException('Nenhuma consulta encontrada');
    }
    return consultas.map((consulta) => new ConsultaDTO(consulta));
  }

  async validarTipoConsulta(tipoConsulta: string): Promise<number> {
    const tipoConsultaEncontrado = TIPOS_CONSULTA[tipoConsulta];
    if (!tipoConsultaEncontrado) {
      throw new NotFoundException('Tipo de consulta inválido');
    }
    return tipoConsultaEncontrado.pontuacao;
  }

  async validarStatus(statusAtual: string, statusNovo: string) {
    if (statusAtual === StatusEnum.REALIZADA) {
      throw new BadRequestException(
        'Consulta já realizada e não pode ser alterada.',
      );
    }
    if (
      statusNovo !== StatusEnum.REALIZADA &&
      statusAtual !== StatusEnum.NAO_REALIZADA
    ) {
      throw new BadRequestException('Status inválido para atualização');
    }
  }

  async deletar(id: string): Promise<void> {
    const consulta = await this.buscarPorId(id);

    if (consulta.status === StatusEnum.REALIZADA) {
      throw new BadRequestException(
        'Consulta já realizada e não pode ser deletada.',
      );
    }

    await this.consultaRepository.deletar(id);
  }
}
