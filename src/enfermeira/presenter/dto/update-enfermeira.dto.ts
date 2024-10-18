import { PartialType } from '@nestjs/mapped-types';
import { CriarEnfermeiraDto } from './criar-enfermeira.dto';

export class UpdateEnfermeiraDto extends PartialType(CriarEnfermeiraDto) {}
