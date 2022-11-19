import { Entity, Column } from "typeorm"
import { Pagamento } from "./Pagamento";

@Entity("pagCartao")
export class PagCartao extends Pagamento {
  @Column()
  parcelas: number;

  constructor(parcelas: number, situacao: string, servicoId: number) {
    super(situacao);

    this.parcelas = parcelas;
  }
}

