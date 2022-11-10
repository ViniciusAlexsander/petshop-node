import { Entity, Column, OneToMany } from "typeorm"
import Base from "./Base"
import { Cidade } from "./Cidade";

@Entity("estados")
export class Estado extends Base {
  @Column()
  nome: string;

  @OneToMany(() => Cidade, cidade => cidade.estado)
  cidades: Cidade[];

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  adicionarCidade = (cidade: Cidade): void => {
    if(!this.cidades) this.cidades = new Array<Cidade>();
    this.cidades.push(cidade);
  }
}
