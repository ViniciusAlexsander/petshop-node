import { Entity, Column, ManyToOne, OneToMany } from "typeorm"
import Base from "./Base"


@Entity("enderecos")
export class Servico extends Base {
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
