import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663156087004 implements MigrationInterface {
    name = 'default1663156087004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "placa" text NOT NULL, "chassi" text NOT NULL, "renavam" numeric NOT NULL, "modelo" text NOT NULL, "marca" text NOT NULL, "ano" numeric NOT NULL, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cars"`);
    }
}
