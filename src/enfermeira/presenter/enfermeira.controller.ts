import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnfermeiraService } from '../application/enfermeira.service';
import { CriarEnfermeiraDto } from './dto/criar-enfermeira.dto';
import { EnfermeiraDto } from './dto/enfermeira.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Enfermeiras')
@Controller('enfermeiras')
export class EnfermeiraController {
  constructor(private readonly enfermeiraService: EnfermeiraService) {}


  @Post()
  async create(
    @Body() criarEnfermeiraDto: CriarEnfermeiraDto,
  ): Promise<EnfermeiraDto> {
    return await this.enfermeiraService.criar(criarEnfermeiraDto);
  }

  @Get()
  async findAll(): Promise<EnfermeiraDto[]> {
    return this.enfermeiraService.listarTodos();
  }
}
