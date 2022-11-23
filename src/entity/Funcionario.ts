import { Servico } from 'entity/Servico';
import { Entity, Column, ManyToMany, ManyToOne } from "typeorm"
import { Pessoa } from "./Pessoa";

@Entity("funcionarios")
export class Funcionario extends Pessoa {
  @Column()
  funcao: string;



  constructor(nome: string, email: string, codNac: string, funcao: string) {
    super(nome, email, codNac);
    this.funcao = funcao;
  }

  alterarFuncionario = (nome: string, email: string, codNac: string, funcao: string): void => {
    this.nome = nome;
    this.email = email;
    this.codNac = codNac;
    this.funcao = funcao;
  }
}
