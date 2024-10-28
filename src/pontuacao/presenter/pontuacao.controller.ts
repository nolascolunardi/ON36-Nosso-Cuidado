import { PontuacaoService } from '../application/pontuacao.service';
import { Controller, Get, Param } from '@nestjs/common';
import { PontuacaoDto } from './dto/pontuacao.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErroGenericoSwagger } from '../../swagger/erro-generico.swagger';

@ApiTags('Pontuação')
@Controller('pontuacao')
export class PontuacaoController {
  constructor(private readonly pontuacaoService: PontuacaoService) {}

  @Get('/:email')
  @ApiOperation({ summary: 'Listagem de pontuação da gestante por email' })
  @ApiResponse({
    status: 200,
    description: 'Pontuação da gestante encontrada',
    type: PontuacaoDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Mãe não encontrada',
    type: ErroGenericoSwagger,
  })
  async buscarPontuacao(@Param('email') email: string): Promise<PontuacaoDto> {
    return await this.pontuacaoService.buscarPontuacao(email);
  }
}
