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
    
    constructor(logradouro: string, numero: number, complemento: string, bairro: string, cep: string, cidade: Cidade, pessoa: Pessoa) {
        super();
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.pessoa = pessoa;
    }

}
