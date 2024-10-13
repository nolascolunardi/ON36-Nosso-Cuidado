import { Module } from '@nestjs/common';
import { EnfermeiraController } from '../presenter/enfermeira.controller';
import { enfermeiraProviders } from './enfermeiraProviders';
import { Enfermeira } from '../domain/enfermeira.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  controllers: [EnfermeiraController],
  providers: enfermeiraProviders,
  imports: [TypeOrmModule.forFeature([Enfermeira])],
  exports: enfermeiraProviders,
})
export class EnfermeiraModule {}
