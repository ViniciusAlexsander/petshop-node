import { Entity, Column } from "typeorm"
import Base from "./Base"

@Entity("pagamento")
export class Pagamento extends Base {
  @Column()
  situacao: SituacaoPagamento;

  constructor(situacao: SituacaoPagamento) {
    super();

    this.situacao = situacao;
  }
}

export interface SituacaoPagamento {
  // TODO: Perguntar professor o que colocar aqui
}