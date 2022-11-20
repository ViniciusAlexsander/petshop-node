import { Categoria } from 'entity/Categoria';
import { Entity, Column, OneToMany } from "typeorm"
import Base from "./Base"

@Entity("produto")
export class Produto extends Base {

		@OneToMany(() => Categoria, categoria => categoria.nome)
		categoria: Categoria[];

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
