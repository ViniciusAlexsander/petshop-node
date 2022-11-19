import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, Column } from "typeorm";

export default class Base extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn()
  createAt: Date;

  @Column()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column()
  version: number;

  constructor() {
    super();
    this.createAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = null;
    this.version = 0;
  }

  invalidar = (): void => {
    this.deletedAt = new Date();
  }

  atualizar = (): void => {
    this.updatedAt = new Date();
    this.version = this.version++;
  }
}