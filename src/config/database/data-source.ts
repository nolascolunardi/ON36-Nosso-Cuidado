import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config/dist';
import { Endereco } from '../../endereco/domain/endereco.entity';
import { Consulta } from '../../consulta/domain/consulta.entity';
import { Enfermeira } from '../../enfermeira/domain/enfermeira.entity';
import { Pontuacao } from '../../pontuacao/domain/pontuacao.entity';
import { Pessoa } from '../../pessoa/domain/pessoa.entity';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  host: configService.get<string>('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [Endereco, Consulta, Enfermeira, Pontuacao, Pessoa],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source foi inicializado!');
  })
  .catch((err) => {
    console.error('Erro durante a inicializacao do Data Source', err);
  });
