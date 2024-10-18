import { PontuacaoService } from '../application/pontuacao.service';
import { Controller, Get, Param } from '@nestjs/common';
import { PontuacaoDto } from './dto/pontuacao.dto';

@Controller('pontuacao')
export class PontuacaoController {
  constructor(private readonly pontuacaoService: PontuacaoService) {}

  @Get('/:email')
  async buscarPontuacao(@Param('email') email: string): Promise<PontuacaoDto> {
    return await this.pontuacaoService.buscarPontuacao(email);
  }
}
