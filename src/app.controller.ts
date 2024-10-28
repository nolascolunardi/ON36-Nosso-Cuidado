import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Home')
@Controller()
export class AppController {
  @Get()
  home(): string {
    return '====== Projeto Nosso Crescimento - Desenvolvido por: Ana Laura Nolasco ======';
  }
}