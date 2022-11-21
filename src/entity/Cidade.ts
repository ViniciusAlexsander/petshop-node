import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import Base from "./Base"
import { Endereco } from "./Endereco";
import { Estado } from "./Estado";

@Entity("cidades")
export class Cidade extends Base {
  @Column()
  nome: string;

  @ManyToOne(() => Estado, estado => estado.cidades)
  @JoinColumn()
  estado: Estado;

  @OneToMany(() => Endereco, endereco => endereco.cidade)
  endereco: Endereco[];

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  adicionarEndereco = (endereco: Endereco): void => {
    if(!this.endereco) this.endereco = new Array<Endereco>();
    this.endereco.push(endereco);
  }

  removerEndereco = (endereco: Endereco): void => {
    this.endereco = this.endereco.filter(e => e.logradouro !== endereco.logradouro)
  }
    
}
