import { Pagamento } from './Pagamento';
import { Produto } from 'entity/Produto';
import { Pet } from 'entity/Pet';
import { Entity, Column, ManyToOne, OneToMany, OneToOne } from "typeorm"
import Base from "./Base"


@Entity("servico")
export class Servico extends Base {

		@OneToMany(() => Produto, produto => produto.id)
		produto: Produto;

		@OneToMany(() => Pet, pet => pet.id)
		pet: Pet;

		@OneToOne(() => Pagamento, pagamento => pagamento.id)
		pagamento: Pagamento;

    @Column()
    dataEntrada: Date;

    @Column()
    dataSaida: Date;

    @Column()
    descricao: string;


  constructor(dataEntrada: Date, dataSaida: Date,descricao: string) {
    super();
		this.dataEntrada = dataEntrada;
		this.dataSaida = dataSaida;
		this.descricao = descricao;
  }
}
