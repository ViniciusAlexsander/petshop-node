import { Produto } from 'entity/Produto';
import { Entity, Column, ManyToMany } from "typeorm"
import Base from './Base'
@Entity("categoria")
export class Categoria extends Base {
	@Column()
	nome: string;

	@ManyToMany(() => Produto, (produto) => produto.categoria)
	produto: Produto[];

	constructor(nome:string) {
		super();
		this.nome = nome;
	}

	adicionarProduto = (produto: Produto): void => {
		if(!this.produto) this.produto = new Array<Produto>();
		this.produto.push(produto);
	}
}
