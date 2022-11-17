import { Entity, Column, ManyToOne, OneToMany } from "typeorm"
import Base from './Base'

@Entity("categoria")
export class Categoria extends Base {
	@Column()
	nome: string;

	constructor(nome:string) {
		super();
		this.nome = nome;
	}

}
