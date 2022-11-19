import { Entity, Column } from "typeorm"
import { Pagamento } from "./Pagamento";
import { Servico } from "./Servico";

@Entity("pagDinheiro")
export class PagDinheiro extends Pagamento {
  @Column()
  dataVencimento: Date;

  @Column()
  dataPagamento: Date;

  constructor(dataVencimento: Date, dataPagamento: Date, situacao: string, servico: Servico) {
    super(situacao, servico);

    this.dataVencimento = dataVencimento;
    this.dataPagamento = dataPagamento;
  }
}

