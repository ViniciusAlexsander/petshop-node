import { Entity, Column, OneToMany } from "typeorm";
import Base from "./Base";
import { Pet } from "./Pet";

@Entity("especie")
export class Especie extends Base {
  @Column()
  descricao: string;

  @OneToMany(() => Pet, (pet) => pet.especie)
  pet: Pet[];

  constructor(descricao: string) {
    super();
    this.descricao = descricao;
  }
}
