import { ConsultaService } from './consulta.service';
import { ConsultaTypeOrmRepository } from '../infrastructure/consultaTypeOrm.repository';
import { ConsultaRepository } from './ports/consulta.repository';

export const consultaProviders = [
  {
    provide: ConsultaRepository,
    useClass: ConsultaTypeOrmRepository,
  },
  ConsultaService,
];
