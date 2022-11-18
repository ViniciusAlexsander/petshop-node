import { Entity, Column, OneToMany } from "typeorm";
import Base from "./Base";
import { Pet } from "./Pet";

@Entity("raca")
export class Raca extends Base {
  @Column()
  descricao: string;

  @OneToMany(() => Pet, (pet) => pet.raca)
  pet: Pet[];

  constructor(descricao: string) {
    super();
    this.descricao = descricao;
  }
}
