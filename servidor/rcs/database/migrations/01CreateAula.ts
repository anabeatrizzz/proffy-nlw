import Knex from 'knex';

/* Indica quais alterações fazer no banco de dados */
export async function up(knex: Knex){
  /* Criando tabela aula */
  return knex.schema.createTable('aula', tabela => {
    /* Campos da tabela aula */
    tabela.increments('cd_aula').primary();
    tabela.string('materia_aula').notNullable();
    tabela.decimal('custo_aula').notNullable();

    /* Chave estrangeira. Relacionamento entre prof e aula*/
    tabela.integer('id_usuario')
      .notNullable()
      .references('cd_usuario')
      .inTable('usuario')
      /* O que acontece quando o prof for excluido. A opção CASCADE exclui as aulas do prof tambem */
      .onDelete('CASCADE')
      /* O que acontece com id_usuarios caso cd_usuario for alterado */
      .onUpdate('CASCADE');
  })
}

/* Desfaz alterações caso dê ruim */
export async function down(knex: Knex){
  return knex.schema.dropTable('aula');
}