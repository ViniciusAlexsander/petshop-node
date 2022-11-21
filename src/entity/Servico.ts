import Base from "./Base";
import { Produto } from "entity/Produto";
import { Pet } from "entity/Pet";
import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { PagCartao } from "./PagCartao";
import { PagDinheiro } from "./PagDinheiro";

@Entity("servico")
export class Servico extends Base {
  @Column()
  dataEntrada: Date;

  @Column()
  dataSaida: Date;

  @Column()
  descricao: string;

  @OneToOne(() => PagCartao)
  @JoinColumn({ name: "pagCartaoId" })
  pagCartao: PagCartao;

  @OneToOne(() => PagDinheiro)
  @JoinColumn({ name: "pagDinheiroId" })
  pagDinheiro: PagDinheiro;

  @OneToMany(() => Produto, (produto) => produto.id)
  produto: Produto;

  @OneToMany(() => Pet, (pet) => pet.id)
  pet: Pet;

  constructor(dataEntrada: Date, dataSaida: Date, descricao: string) {
    super();
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
    this.descricao = descricao;
  }

  adicionarPagamento = async (
    pagamento: PagCartao | PagDinheiro
  ): Promise<void> => {
    if (pagamento instanceof PagCartao) {
      this.pagCartao = pagamento;
    } else {
      this.pagDinheiro = pagamento;
    }

    await this.save();
  };
}
