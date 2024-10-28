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
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ErroGenericoSwagger } from '../../swagger/erro-generico.swagger';

@ApiTags('Pessoas Gestantes')
@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastro de Pessoa Gestante' })
  @ApiResponse({
    status: 201,
    description: 'Criado com sucesso',
    type: PessoaDto,
  })
  @ApiResponse({
    status: 403,
    description: 'E-mail ou senha invalido',
    type: ErroGenericoSwagger,
  })
  async criar(@Body() createPessoaDto: CriarPessoaDto): Promise<PessoaDto> {
    return await this.pessoaService.criar(createPessoaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listagem de Todas Pessoas Gestantes Cadastradas Ativas' })
  @ApiOkResponse({
    description: 'Listado com sucesso',
    type: [PessoaDto],
  })
  @ApiResponse({
    description: 'Nenhuma pessoa gestante encontrada',
    status: 404,
    type: ErroGenericoSwagger,
  })
  async listarTodas(): Promise<PessoaDto[]> {
    return await this.pessoaService.listarTodos();
  }

  @Get(':email')
  @ApiOperation({ summary: 'Listagem de Pessoa Gestante por Email' })
  @ApiResponse({
    description: 'Pessoa Gestante encontrada com sucesso',
    status: 200,
    type: PessoaDto,
  })
  @ApiResponse({
    description: 'Pessoa Gestante não encontrada',
    status: 404,
    type: ErroGenericoSwagger,
  })
  async buscarPorEmail(@Param('email') email: string): Promise<Pessoa> {
    return await this.pessoaService.buscarPorEmail(email);
  }

  @Patch(':email')
  @ApiOperation({ summary: 'Atualização de Informações de Pessoa Gestante' })
  @ApiResponse({
    description: 'Atualizado com sucesso',
    status: 200,
    type: PessoaDto,
  })
  @ApiResponse({
    description: 'Pessoa Gestante não encontrada',
    status: 404,
    type: ErroGenericoSwagger,
  })
  async atualizarInformacoes(
    @Param('email') email: string,
    @Body() updatePessoaDto: AtualizarPessoaDto,
  ) {
    return this.pessoaService.atualizarInformacoes(email, updatePessoaDto);
  }

  @Delete(':email')
  @ApiOperation({ summary: 'Deletar Pessoa Gestante' })
  @ApiResponse({
    description: 'Deletado com sucesso',
    status: 200,
  })
  @ApiResponse({
    description: 'Pessoa Gestante não encontrada',
    status: 404,
    type: ErroGenericoSwagger,
  })
  async remove(@Param('email') email: string): Promise<string> {
    await this.pessoaService.deletar(email);
    return 'Pessoa deletada com sucesso';
  }
}
