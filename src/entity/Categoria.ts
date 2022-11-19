import { Produto } from 'entity/Produto';
import { Entity, Column, ManyToMany } from "typeorm"
import Base from './Base'
@Entity("categoria")
export class Categoria extends Base {
	@Column()
	nome: string;

	@ManyToMany(() => Produto, produto => produto.nome)
	produto: Produto;

	constructor(nome:string) {
		super();
		this.nome = nome;
	}

}
