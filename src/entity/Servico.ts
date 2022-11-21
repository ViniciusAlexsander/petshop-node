import Base from "./Base";
import { Produto } from "entity/Produto";
import { Pet } from "entity/Pet";
import { Entity, Column, OneToMany, OneToOne } from "typeorm";
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

  @OneToOne(() => PagCartao, (pagamento) => pagamento.servico, {
    cascade: true,
  })
  pagCartao: PagCartao;

  @OneToOne(() => PagDinheiro, (pagamento) => pagamento.servico, {
    cascade: true,
  })
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
}
