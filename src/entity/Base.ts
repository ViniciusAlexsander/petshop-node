import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, VersionColumn, UpdateDateColumn,  } from "typeorm";


export default class Base extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @VersionColumn()
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
}