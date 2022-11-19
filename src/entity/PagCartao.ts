import { Entity, Column } from "typeorm"
import { Pagamento } from "./Pagamento";
import { Servico } from "./Servico";

@Entity("pagCartao")
export class PagCartao extends Pagamento {
  @Column()
  parcelas: number;

  constructor(parcelas: number, situacao: string, servico: Servico) {
    super(situacao, servico);

    this.parcelas = parcelas;
  }
}

