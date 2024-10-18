import 'dotenv/config';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from '../../consulta/domain/consulta.entity';
import { Enfermeira } from '../../enfermeira/domain/enfermeira.entity';
import { Pontuacao } from '../../pontuacao/domain/pontuacao.entity';
import { Pessoa } from '../../pessoa/domain/pessoa.entity';
import { Endereco } from '../../endereco/domain/endereco.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: process.env.DB_URL,
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Endereco, Consulta, Enfermeira, Pontuacao, Pessoa],
        autoLoadEntities: true,
        synchronize: true,
        logger: 'debug',
      }),
    }),
  ],
})
export class DbModule {}
