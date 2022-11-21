import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Pagamento } from "./Pagamento";
import { Servico } from "./Servico";

@Entity("pagCartao")
export class PagCartao extends Pagamento {
  @Column()
  parcelas: number;

  @OneToOne(() => Servico, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  servico: Servico;

  constructor(parcelas: number, situacao: string, servico: Servico) {
    super(situacao);

    this.parcelas = parcelas;
    this.servico = servico;
  }
}
