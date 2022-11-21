import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Pagamento } from "./Pagamento";
import { Servico } from "./Servico";

@Entity("pagDinheiro")
export class PagDinheiro extends Pagamento {
  @Column()
  dataVencimento: Date;

  @Column()
  dataPagamento: Date;

  @OneToOne(() => Servico, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  servico: Servico;

  constructor(
    dataVencimento: Date,
    dataPagamento: Date,
    situacao: string,
    servico: Servico
  ) {
    super(situacao);

    this.dataVencimento = dataVencimento;
    this.dataPagamento = dataPagamento;
    this.servico = servico;
  }
}
