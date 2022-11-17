import { Entity, Column } from "typeorm"
import { Pagamento, SituacaoPagamento } from "./Pagamento";

@Entity("pagCartao")
export class PagDinheiro extends Pagamento {
  @Column()
  parcelas: number;

  constructor(parcelas: number, situacao: SituacaoPagamento) {
    super(situacao);

    this.parcelas = parcelas;
  }
}

