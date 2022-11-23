import { Servico } from 'entity/Servico';
import { Entity, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import Base from "./Base";
import { Especie } from "./Especie";
import { Raca } from "./Raca";

@Entity("pet")
export class Pet extends Base {
  @Column()
  nome: string;

  @ManyToOne(() => Especie)
  @JoinColumn({ name: "especieId" })
  especie: Especie;

  @ManyToOne(() => Raca)
  @JoinColumn({ name: "racaId" })
  raca: Raca;

	@ManyToMany(() => Servico, (servico) => servico.pet)
  @JoinTable({
    name: "servico_pet",
  })
	servico: Servico[];

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
