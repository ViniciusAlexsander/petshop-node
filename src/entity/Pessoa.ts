import { Entity, Column, OneToOne, ManyToOne } from "typeorm"
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

    @OneToOne(() => Endereco, endereco => endereco.pessoa)
    endereco: Endereco;

    @ManyToOne(() => Telefone, telefone => telefone.pessoa)
    telefones: Telefone[]

    constructor(nome: string, email: string, codNac: string, endereco: Endereco) {
        super();
        this.nome = nome;
        this.email = email;
        this.codNac = codNac;
        this.endereco = endereco;
    }

    adicionarTelefone = (telefone: Telefone): void => {
        if(!this.telefones) this.telefones = new Array<Telefone>();
        this.telefones.push(telefone);
    }
}
