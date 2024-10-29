import { IsString } from 'class-validator';
import { StatusEnum } from '../../../utils/status.enum';
import { ApiProperty } from "@nestjs/swagger";

export class AtualizarConsultaDto {
  @IsString()
  @ApiProperty()
  status: StatusEnum;
}
