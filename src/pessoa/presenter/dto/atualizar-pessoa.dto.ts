import { PartialType } from '@nestjs/mapped-types';
import { CriarPessoaDto } from './criar-pessoa.dto';
import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AtualizarPessoaDto extends PartialType(CriarPessoaDto) {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsEmail()
  @ApiPropertyOptional()
  email?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  senha?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  telefone?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  dataNascimento?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  medicoResponsavel?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  semanasGestacao?: number;
}
