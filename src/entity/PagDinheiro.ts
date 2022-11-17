import { Entity, Column } from "typeorm"
import { Pagamento, SituacaoPagamento } from "./Pagamento";

@Entity("pagDinheiro")
export class PagDinheiro extends Pagamento {
  @Column()
  dataVencimento: Date;

  @Column()
  dataPagamento: Date;

  constructor(dataVencimento: Date, dataPagamento: Date, situacao: SituacaoPagamento) {
    super(situacao);

    this.dataVencimento = dataVencimento;
    this.dataPagamento = dataPagamento;
  }
}

