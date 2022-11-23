import { Entity, Column } from "typeorm"
import { Pessoa } from "./Pessoa";

@Entity("clientes")
export class Cliente extends Pessoa {
  @Column()
  tipo: string;


  constructor(nome: string, email: string, codNac: string, tipo: string) {
    super(nome, email, codNac);
    this.tipo = tipo;
  }

  alterarCliente = (nome: string, email: string, codNac: string, tipo: string): void => {
    this.nome = nome;
    this.email = email;
    this.codNac = codNac;
    this.tipo = tipo;
  }
}
