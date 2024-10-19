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

@Controller('consultas')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  criar(@Body() criarConsulta: CriarConsultaDto): Promise<ConsultaDTO> {
    return this.consultaService.criar(criarConsulta);
  }

  @Patch('/:id')
  atualizarStatus(
    @Param('id') id: string,
    @Body() atualizarDto: AtualizarConsultaDto,
  ): Promise<ConsultaDTO> {
    return this.consultaService.atualizarStatus(id, atualizarDto);
  }

  @Get('')
  listarTodas(): Promise<ConsultaDTO[]> {
    return this.consultaService.listarTodas();
  }

  @Get('/pessoa/:email')
  listarTodosPorEmail(@Param('email') email: string): Promise<ConsultaDTO[]> {
    return this.consultaService.listarTodasPorEmail(email);
  }

  @Get('/:id')
  buscarPorId(@Param('id') id: string): Promise<Consulta> {
    return this.consultaService.buscarPorId(id);
  }

  @Delete('/:id')
  async deletar(@Param('id') id: string): Promise<string> {
    await this.consultaService.deletar(id);
    return 'Consulta deletada com sucesso!';
  }
}
