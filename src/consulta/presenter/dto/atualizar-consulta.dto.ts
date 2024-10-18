import { IsString } from 'class-validator';
import { StatusEnum } from '../../../utils/status.enum';

export class AtualizarConsultaDto {
  @IsString()
  status: StatusEnum;
}
