import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668650027120 implements MigrationInterface {
    name = 'migrations1668650027120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "raca" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_52c6b5dccf1e5f528afd2309857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "idade" integer NOT NULL, "especieId" integer, "racaId" integer, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "especie" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_07fb45be286aefa181943248b21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estados" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_3d9a9f2658d5086012f27924d30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cidades" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "estadoId" integer, CONSTRAINT "PK_cc606d4fea4335e32bd19f3a9fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "logradouro" character varying NOT NULL, "numero" integer NOT NULL, "complemento" character varying NOT NULL, "bairro" character varying NOT NULL, "cep" character varying NOT NULL, "cidadeId" integer, CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "telefone" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "numero" character varying NOT NULL, CONSTRAINT "PK_6b27db34d6da7b23e8680a55fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pessoas" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "codNac" character varying NOT NULL, "telefonesId" integer, CONSTRAINT "PK_fa8104cfc91dc207880a73a1acd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "funcionarios" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "codNac" character varying NOT NULL, "funcao" character varying NOT NULL, "telefonesId" integer, CONSTRAINT "PK_a6ee7c0e30d968db531ad073337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pagamento" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "situacao" character varying NOT NULL, CONSTRAINT "PK_ac81e75b741a26f350c5fb1ff20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pagCartao" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "situacao" character varying NOT NULL, "parcelas" integer NOT NULL, CONSTRAINT "PK_f452b019871eeae901eb3bfdb59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produto" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "preco" integer NOT NULL, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pagDinheiro" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "situacao" character varying NOT NULL, "dataVencimento" TIMESTAMP NOT NULL, "dataPagamento" TIMESTAMP NOT NULL, CONSTRAINT "PK_58908626af1dffff9ccb65ddefb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "logradouro"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "cidadeId"`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "logradouro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "numero" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "complemento" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "cep" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "cidadeId" integer`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "dataEntrada" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "dataSaida" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "descricao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_eaec96c9fd972f923a4c0e3e124" FOREIGN KEY ("especieId") REFERENCES "especie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_59c8f79d911ff3463780854512c" FOREIGN KEY ("racaId") REFERENCES "raca"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cidades" ADD CONSTRAINT "FK_3b2e818c7f3b7ff67878432bd14" FOREIGN KEY ("estadoId") REFERENCES "estados"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_b401dc08d9fb5ec3efb7a383fb0" FOREIGN KEY ("cidadeId") REFERENCES "cidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pessoas" ADD CONSTRAINT "FK_c41cbc2f298d6069f02dc4402be" FOREIGN KEY ("telefonesId") REFERENCES "telefone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "funcionarios" ADD CONSTRAINT "FK_b3ad4f534c021d14357514b8d7f" FOREIGN KEY ("telefonesId") REFERENCES "telefone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "funcionarios" DROP CONSTRAINT "FK_b3ad4f534c021d14357514b8d7f"`);
        await queryRunner.query(`ALTER TABLE "pessoas" DROP CONSTRAINT "FK_c41cbc2f298d6069f02dc4402be"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_b401dc08d9fb5ec3efb7a383fb0"`);
        await queryRunner.query(`ALTER TABLE "cidades" DROP CONSTRAINT "FK_3b2e818c7f3b7ff67878432bd14"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_59c8f79d911ff3463780854512c"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_eaec96c9fd972f923a4c0e3e124"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "dataSaida"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "dataEntrada"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "cidadeId"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "logradouro"`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "cidadeId" integer`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "cep" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "complemento" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "numero" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "logradouro" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "pagDinheiro"`);
        await queryRunner.query(`DROP TABLE "produto"`);
        await queryRunner.query(`DROP TABLE "pagCartao"`);
        await queryRunner.query(`DROP TABLE "pagamento"`);
        await queryRunner.query(`DROP TABLE "funcionarios"`);
        await queryRunner.query(`DROP TABLE "pessoas"`);
        await queryRunner.query(`DROP TABLE "telefone"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "cidades"`);
        await queryRunner.query(`DROP TABLE "estados"`);
        await queryRunner.query(`DROP TABLE "especie"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "raca"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
