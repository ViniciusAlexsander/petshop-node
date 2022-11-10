import { Entity, Column, OneToMany } from "typeorm"
import Base from "./Base"
import { Pessoa } from "./Pessoa";

@Entity("telefone")
export class Telefone extends Base {
    @Column()
    numero: string

    @OneToMany(() => Pessoa, pessoa => pessoa.telefones)
    pessoa: Pessoa;

    constructor(telefone: string) {
        super();
        this.numero = telefone;
    }

}
