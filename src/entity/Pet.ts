import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import Base from "./Base";
import { Cidade } from "./Cidade";
import { Especie } from "./Especie";
import { Pessoa } from "./Pessoa";
import { Raca } from "./Raca";

@Entity("pet")
export class Pet extends Base {
  @Column()
  nome: string;

  @ManyToOne(() => Especie, (especie) => especie.pet)
  especie: Especie;

  @ManyToOne(() => Raca, (raca) => raca.pet)
  raca: Raca;

  @Column()
  idade: number;

  constructor(nome: string, especie: Especie, raca: Raca, idade: number) {
    super();
    this.nome = nome;
    this.especie = especie;
    this.raca = raca;
    this.idade = idade;
  }
}
