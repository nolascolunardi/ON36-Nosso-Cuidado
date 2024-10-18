import { EnfermeiraService } from './enfermeira.service';
import { EnfermeiraTypeOrmRepository } from '../infrastructure/enfermeiraTypeOrm.repository';
import { EnfermeiraRepository } from './ports/enfermeira.repository';
import { EnfermeiraController } from '../presenter/enfermeira.controller';

export const enfermeiraProviders = [
  EnfermeiraService,
  {
    provide: EnfermeiraRepository,
    useClass: EnfermeiraTypeOrmRepository,
  },
  EnfermeiraController,
];
