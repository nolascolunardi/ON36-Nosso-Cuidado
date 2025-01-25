import { ConsultaDTO } from "../../src/consulta/presenter/dto/consulta.dto";
import { CriarConsultaDto } from "../../src/consulta/presenter/dto/criar-consulta.dto";
import { Consulta } from "../../src/consulta/domain/consulta.entity";
import { StatusEnum } from "../../src/utils/status.enum";
import { pessoaMock } from "./pessoa.mock";


export const criarConsultaDto = {
  tipoConsulta: "Pediatria",
  dataConsulta: "2024-10-15",
  horaConsulta: "14:00",
  pessoaEmail: "joana.silva@example.com",
  toEntity:() => consultaEntidade
} as unknown as CriarConsultaDto;

export const consultaEntidade = {
  tipoConsulta: "Pediatria",
  status: StatusEnum.PENDENTE,
  dataConsulta: new Date("2024-10-15"),
  horaConsulta: "14:00",
  pessoa: pessoaMock
} as unknown as Consulta;

export const consultaRetornoBanco = {
  id: "1",
  tipoConsulta: "Pediatria",
  dataConsulta: new Date("2024-10-15"),
  horaConsulta: "14:00",
  status: StatusEnum.PENDENTE,
  pessoa: pessoaMock
} as unknown as Consulta;

export const consultaDto = {
  consulta_id: "1",
  tipo: "Pediatria",
  data: new Date("2024-10-15"),
  hora: "14:00",
  status: StatusEnum.PENDENTE,
  pessoa: pessoaMock.nomeCompleto
} as unknown as ConsultaDTO;