import { Entity, Column, ManyToOne, OneToMany } from "typeorm"
import Base from "./Base"
import { Endereco } from "./Endereco";
import { Estado } from "./Estado";

@Entity("cidades")
export class Cidade extends Base {
  @Column()
  nome: string;

  @ManyToOne(() => Estado, estado => estado.cidades)
  estado: Estado;

  @OneToMany(() => Endereco, endereco => endereco.cidade)
  enderecos: Endereco[];

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  adicionarEndereco = (endereco: Endereco): void => {
    if(!this.enderecos) this.enderecos = new Array<Endereco>();
    this.enderecos.push(endereco);
  }
    
}
