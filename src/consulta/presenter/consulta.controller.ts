import { Controller, Get, Post, Body, Param, Put, Patch } from '@nestjs/common';
import { ConsultaService } from '../application/consulta.service';
import { CriarConsultaDto } from './dto/criar-consulta.dto';
import { AtualizarConsultaDto } from './dto/atualizar-consulta.dto';

@Controller('consultas')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  criar(@Body() criarConsulta: CriarConsultaDto) {
    return this.consultaService.criar(criarConsulta);
  }

  @Patch('/:id')
  atualizarStatus(
    @Param('id') id: string,
    @Body() atualizarDto: AtualizarConsultaDto,
  ) {
    return this.consultaService.atualizarStatus(id, atualizarDto);
  }

  @Get('')
  listarTodas() {
    return this.consultaService.listarTodas();
  }

  @Get('/:id')
  buscarPorId(@Param('id') id: string) {
    return this.consultaService.buscarPorId(id);
  }
}
