import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ErroGenericoSwagger {
  @ApiProperty()
  message: string;

  @ApiPropertyOptional()
  error: string;

  @ApiProperty()
  statusCode: number;
}