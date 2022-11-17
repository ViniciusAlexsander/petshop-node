import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668649741163 implements MigrationInterface {
    name = 'migrations1668649741163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "telefone" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "numero" character varying NOT NULL, CONSTRAINT "PK_6b27db34d6da7b23e8680a55fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pessoas" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "codNac" character varying NOT NULL, "telefonesId" integer, CONSTRAINT "PK_fa8104cfc91dc207880a73a1acd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "logradouro" character varying NOT NULL, "numero" integer NOT NULL, "complemento" character varying NOT NULL, "bairro" character varying NOT NULL, "cep" character varying NOT NULL, "cidadeId" integer, CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estados" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_3d9a9f2658d5086012f27924d30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cidades" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "version" integer NOT NULL, "nome" character varying NOT NULL, "estadoId" integer, CONSTRAINT "PK_cc606d4fea4335e32bd19f3a9fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pessoas" ADD CONSTRAINT "FK_c41cbc2f298d6069f02dc4402be" FOREIGN KEY ("telefonesId") REFERENCES "telefone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_b401dc08d9fb5ec3efb7a383fb0" FOREIGN KEY ("cidadeId") REFERENCES "cidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cidades" ADD CONSTRAINT "FK_3b2e818c7f3b7ff67878432bd14" FOREIGN KEY ("estadoId") REFERENCES "estados"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cidades" DROP CONSTRAINT "FK_3b2e818c7f3b7ff67878432bd14"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_b401dc08d9fb5ec3efb7a383fb0"`);
        await queryRunner.query(`ALTER TABLE "pessoas" DROP CONSTRAINT "FK_c41cbc2f298d6069f02dc4402be"`);
        await queryRunner.query(`DROP TABLE "cidades"`);
        await queryRunner.query(`DROP TABLE "estados"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "pessoas"`);
        await queryRunner.query(`DROP TABLE "telefone"`);
    }

}
