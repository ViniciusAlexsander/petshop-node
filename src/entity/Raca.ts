import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import Base from "./Base";
import { Cidade } from "./Cidade";
import { Pessoa } from "./Pessoa";
import { Pet } from "./Pet";

@Entity("raca")
export class Raca extends Base {
  @Column()
  descricao: string;

  @OneToMany(() => Pet, (pet) => pet.raca)
  pet: Pet[];

  constructor(descricao: string, pet: Pet[]) {
    super();
    this.descricao = descricao;
    this.pet = pet;
  }
}
