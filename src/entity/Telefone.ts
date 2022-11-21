import { Entity, Column, OneToMany, ManyToOne } from "typeorm"
import Base from "./Base"
import { Pessoa } from "./Pessoa";

@Entity("telefone")
export class Telefone extends Base {
    @Column()
    numero: string

    @ManyToOne(() => Pessoa, pessoa => pessoa.telefone)
    pessoa: Pessoa;

    constructor(telefone: string) {
        super();
        this.numero = telefone;
    }

}
