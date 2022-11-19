import { Entity, Column, OneToOne } from "typeorm"
import Base from "./Base"
import { Servico } from "./Servico";

@Entity("pagamento")
export class Pagamento extends Base {
  @Column()
  situacao: string;

  @OneToOne(() => Servico , servico => servico.pagamento)
  servico: Servico;

  constructor(situacao: string, servico: Servico) {
    super();
    this.situacao = situacao;
    this.servico = servico;
  }
}