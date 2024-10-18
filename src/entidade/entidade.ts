import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Entidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  criadoEm: Date;

  constructor() {
    this.criadoEm = new Date();
  }
}
