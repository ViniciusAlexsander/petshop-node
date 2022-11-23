import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm"
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

    @OneToMany(() => Endereco, endereco => endereco.pessoa, { eager: true, cascade: true })
    endereco: Endereco[];

    @OneToMany(() => Telefone, telefone => telefone.pessoa, { eager: true, cascade: true })
    @JoinColumn()
    telefone: Telefone[]

    constructor(nome: string, email: string, codNac: string) {
        super();
        this.nome = nome;
        this.email = email;
        this.codNac = codNac;
    }

    adicionarEndereco = (endereco: Endereco): void => {
        if(!this.endereco) this.endereco = new Array<Endereco>();
        this.endereco.push(endereco);
    }

    removerEndereco = (endereco: Endereco): void => {
        this.endereco = this.endereco.filter(e => e.logradouro !== endereco.logradouro);
    }

    adicionarTelefone = (telefone: Telefone): void => {
        if(!this.telefone) this.telefone = new Array<Telefone>();
        this.telefone.push(telefone);
    }

    removerTelefone = (telefone: Telefone): void => {
        this.telefone = this.telefone.filter(t => t.numero !== telefone.numero);
    }

    alterarUsuario = (nome: string, email: string, codNac: string): void => {
        this.nome = nome;
        this.email = email;
        this.codNac = codNac;
    }
}
