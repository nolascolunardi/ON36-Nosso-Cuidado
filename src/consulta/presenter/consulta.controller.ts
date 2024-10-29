import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ConsultaService } from '../application/consulta.service';
import { CriarConsultaDto } from './dto/criar-consulta.dto';
import { AtualizarConsultaDto } from './dto/atualizar-consulta.dto';
import { ConsultaDTO } from './dto/consulta.dto';
import { Consulta } from "../domain/consulta.entity";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('Consultas')
@Controller('consultas')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastro de Consulta' })
  @ApiResponse({
    status: 201,
    description: 'Criado com sucesso',
    type: ConsultaDTO,
  })
  @ApiResponse({
    status: 403,
    description: 'Pessoa Gestante não encontrada',
  })
  criar(@Body() criarConsulta: CriarConsultaDto): Promise<ConsultaDTO> {
    return this.consultaService.criar(criarConsulta);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Atualização de Status da Consulta' })
  @ApiResponse({
    status: 200,
    description: 'Atualizado com sucesso',
    type: ConsultaDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'Consulta não encontrada',
  })
  @ApiResponse({
    status: 400,
    description: 'Status inválido para atualização',
  })
  @ApiResponse({
    status: 400,
    description: 'Consulta já realizada e não pode ser alterada',
  })
  atualizarStatus(
    @Param('id') id: string,
    @Body() atualizarDto: AtualizarConsultaDto,
  ): Promise<ConsultaDTO> {
    return this.consultaService.atualizarStatus(id, atualizarDto);
  }

  @Get('')
  @ApiOperation({ summary: 'Listagem de Todas Consultas Cadastradas' })
  @ApiResponse({
    description: 'Listado com sucesso',
    status: 200,
    type: [ConsultaDTO],
  })
  @ApiResponse({
    description: 'Nenhuma consulta encontrada',
    status: 404,
  })
  listarTodas(): Promise<ConsultaDTO[]> {
    return this.consultaService.listarTodas();
  }

  @Get('/pessoa/:email')
  @ApiOperation({ summary: 'Listagem de Consultas por Email' })
  @ApiResponse({
    description: 'Consultas encontradas com sucesso',
    status: 200,
    type: [ConsultaDTO],
  })
  @ApiResponse({
    description: 'Nenhuma consulta encontrada',
    status: 404,
  })
  @ApiResponse({
    description: 'Pessoa Gestante não encontrada',
    status: 404,
  })
  listarTodosPorEmail(@Param('email') email: string): Promise<ConsultaDTO[]> {
    return this.consultaService.listarTodasPorEmail(email);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Listagem de Consulta por ID' })
  @ApiResponse({
    description: 'Consulta encontrada com sucesso',
    status: 200,
    type: ConsultaDTO,
  })
  @ApiResponse({
    description: 'Consulta não encontrada',
    status: 404,
  })
  buscarPorId(@Param('id') id: string): Promise<Consulta> {
    return this.consultaService.buscarPorId(id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deletar Consulta' })
  @ApiResponse({
    description: 'Deletado com sucesso',
    status: 200,
  })
  @ApiResponse({
    description: 'Consulta não encontrada',
    status: 404,
  })
  @ApiResponse({
    description: 'Consulta já realizada e não pode ser deletada.',
    status: 400,
  })
  async deletar(@Param('id') id: string): Promise<string> {
    await this.consultaService.deletar(id);
    return 'Consulta deletada com sucesso!';
  }
}
