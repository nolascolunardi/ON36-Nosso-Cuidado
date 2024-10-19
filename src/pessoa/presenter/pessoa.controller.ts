import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PessoaService } from '../application/pessoa.service';
import { CriarPessoaDto } from './dto/criar-pessoa.dto';
import { AtualizarPessoaDto } from './dto/atualizar-pessoa.dto';
import { Pessoa } from '../domain/pessoa.entity';
import { PessoaDto } from './dto/pessoa.dto';

@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  async criar(@Body() createPessoaDto: CriarPessoaDto): Promise<PessoaDto> {
    return await this.pessoaService.criar(createPessoaDto);
  }

  @Get()
  async listarTodas(): Promise<PessoaDto[]> {
    return await this.pessoaService.listarTodos();
  }

  @Get(':email')
  async buscarPorEmail(@Param('email') email: string): Promise<Pessoa> {
    return await this.pessoaService.buscarPorEmail(email);
  }

  @Patch('atualizar/:email')
  async atualizarInformacoes(
    @Param('email') email: string,
    @Body() updatePessoaDto: AtualizarPessoaDto,
  ) {
    return this.pessoaService.atualizarInformacoes(email, updatePessoaDto);
  }

  @Delete(':email')
  async remove(@Param('email') email: string): Promise<string> {
    await this.pessoaService.deletar(email);
    return 'Pessoa deletada com sucesso';
  }
}
