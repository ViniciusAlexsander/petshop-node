import { Entity, Column, ManyToOne, OneToMany } from "typeorm"
import Base from "./Base"


@Entity("produto")
export class Produto extends Base {
    @Column()
    nome: string;

    @Column()
    preco: number;

  constructor(nome: string, preco:number) {
    super();
		this.nome = nome;
		this.preco = preco;
  }
}
