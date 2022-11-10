import { Entity,  Column, OneToOne, OneToMany, ManyToOne } from "typeorm"
import Base from "./Base"
import { Cidade } from "./Cidade";
import { Pessoa } from "./Pessoa";

@Entity("enderecos")
export class Endereco extends Base {
    @Column()
    logradouro: string;

    @Column()
    numero: number;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    cep: string;

    @OneToOne(() => Pessoa, pessoa => pessoa.endereco )
    pessoa: Pessoa;

    @ManyToOne(() => Cidade, cidade => cidade.enderecos)
    cidade: Cidade;

    
    constructor() {
        super();
        
    }

}
