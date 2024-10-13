import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnfermeiraService } from '../application/enfermeira.service';
import { CriarEnfermeiraDto } from './dto/criar-enfermeira.dto';
import { Enfermeira } from '../domain/enfermeira.entity';

@Controller('enfermeira')
export class EnfermeiraController {
  constructor(private readonly enfermeiraService: EnfermeiraService) {}

  @Post()
  async create(
    @Body() criarEnfermeiraDto: CriarEnfermeiraDto,
  ): Promise<Enfermeira> {
    return await this.enfermeiraService.criar(criarEnfermeiraDto);
  }

  @Get()
  async findAll(): Promise<Enfermeira[]> {
    return this.enfermeiraService.listarTodos();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.enfermeiraService.(+id);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.enfermeiraService.remove(+id);
  // }
}
