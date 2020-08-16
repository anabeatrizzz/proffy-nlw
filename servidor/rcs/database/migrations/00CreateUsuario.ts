import Knex from 'knex';

/* Indica quais alterações fazer no banco de dados */
export async function up(knex: Knex){
	/* Criando tabela usuario */
	return knex.schema.createTable('usuario', tabela => {
		/* Campos da tabela usuario */
		tabela.increments('cd_usuario').primary();
		tabela.string('nome_usuario').notNullable();
		tabela.string('foto_usuario').notNullable();
		tabela.string('wpp_usuario').notNullable();
		tabela.string('bio_usuario').notNullable();
	})
}

/* Desfaz alterações caso dê ruim */
export async function down(knex: Knex){
	return knex.schema.dropTable('usuario');
}