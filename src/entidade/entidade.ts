import { PrimaryGeneratedColumn } from 'typeorm';

export class Entidade {
  @PrimaryGeneratedColumn()
  id: string;

  constructor() {}
}
