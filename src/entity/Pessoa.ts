import { Entity, Column, OneToOne, ManyToOne, OneToMany } from "typeorm"
import Base from "./Base"
import { Endereco } from "./Endereco"
import { Telefone } from "./Telefone"

@Entity("pessoas")
export class Pessoa extends Base {
    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    codNac: string;

    @OneToMany(() => Endereco, endereco => endereco.pessoa)
    enderecos: Endereco[];

    @ManyToOne(() => Telefone, telefone => telefone.pessoa)
    telefones: Telefone[]

    constructor(nome: string, email: string, codNac: string) {
        super();
        this.nome = nome;
        this.email = email;
        this.codNac = codNac;
    }

    adicionarEndereco = (endereco: Endereco): void => {
        if(!this.enderecos) this.enderecos = new Array<Endereco>();
        this.enderecos.push(endereco);
    }

    adicionarTelefone = (telefone: Telefone): void => {
        if(!this.telefones) this.telefones = new Array<Telefone>();
        this.telefones.push(telefone);
    }

    alterarUsuario = (nome: string, email: string, codNac: string): void => {
        this.nome = nome;
        this.email = email;
        this.codNac = codNac;
    }
}
