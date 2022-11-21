import { Servico } from 'entity/Servico';
import { Entity, Column, OneToMany } from "typeorm"
import Base from "./Base"
import { Categoria } from 'entity/Categoria';

@Entity("produto")
export class Produto extends Base {
    @Column()
    nome: string;

    @Column()
    preco: number;

		@OneToMany(() => Categoria, categoria => categoria.produto)
		categoria: Categoria[];

		@OneToMany(() => Servico, (servico) => servico.id)
    photos: Servico[]

  constructor(nome: string, preco:number) {
    super();
		this.nome = nome;
		this.preco = preco;
  }

	adicionarCategoria = (categoria: Categoria): void => {
    if(!this.categoria) this.categoria = new Array<Categoria>();
    this.categoria.push(categoria);
  }

  removerCategoria= (categoria: Categoria): void => {
    this.categoria = this.categoria.filter(e => e.nome !== categoria.nome)
  }
}
