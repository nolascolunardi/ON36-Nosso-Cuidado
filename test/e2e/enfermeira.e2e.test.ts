import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CriarEnfermeiraDto } from '../../src/enfermeira/presenter/dto/criar-enfermeira.dto';
import { AppDataSource } from '../../src/config/database/data-source';

describe('Enfermeira (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await AppDataSource.initialize();
  });

  afterEach(async () => {
    await AppDataSource.destroy();
    await app.close();
  });

  it('/enfermeira (POST) deve criar um novo usuário', async () => {
    return await request(app.getHttpServer())
      .post('/enfermeira')
      .send({
        nomeCompleto: 'Maria Clara Souza',
        email: 'maria.clara@ex.com',
        senha: 'senhaSegura123',
        telefone: '11987654321',
        coren: '123456',
        cpf: '12345678901',
        unidadeDeAtendimento: 'Hospital São Lucas',
        descricao:
          'Enfermeira com 5 anos de experiência em atendimento clínico.',
      })
      .expect(201)
      .then(async (response) => {
        expect(response.body).toMatchObject({
          id: expect.any(String),
          email: 'maria.clara@ex.com',
          name: 'Maria Clara Souza',
        });
      });
  });
});
