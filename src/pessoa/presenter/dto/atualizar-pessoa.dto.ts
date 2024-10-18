import { PartialType } from '@nestjs/mapped-types';
import { CriarPessoaDto } from './criar-pessoa.dto';
import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AtualizarPessoaDto extends PartialType(CriarPessoaDto) {
  @IsOptional()
  @IsString()
  nomeCompleto?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  senha?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsDateString()
  dataNascimento?: string;

  @IsOptional()
  @IsString()
  medicoResponsavel?: string;

  @IsOptional()
  @IsNumber()
  semanasGestacao?: number;
}
