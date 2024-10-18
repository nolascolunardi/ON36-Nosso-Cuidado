import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from '../domain/endereco.entity';
import { enderecoProviders } from './enderecoProviders';

@Module({
  providers: enderecoProviders,
  imports: [TypeOrmModule.forFeature([Endereco])],
  exports: enderecoProviders,
})
export class EnderecoModule {}
