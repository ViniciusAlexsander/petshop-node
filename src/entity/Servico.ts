import { Entity, Column, OneToOne } from "typeorm"
import Base from "./Base"
import { Pagamento } from "./Pagamento";


@Entity("servico")
export class Servico extends Base {
    @Column()
    dataEntrada: Date;

    @Column()
    dataSaida: Date;

    @Column()
    descricao: string;

    @OneToOne(() => Pagamento, pagamento => pagamento.servico)
    pagamento: Pagamento;

  constructor(dataEntrada: Date, dataSaida: Date,descricao: string) {
    super();
		this.dataEntrada = dataEntrada;
		this.dataSaida = dataSaida;
		this.descricao = descricao;
  }
}
