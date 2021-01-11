import Knex from 'knex';

/* Indica quais alterações fazer no banco de dados */
export async function up(knex: Knex){
  /* Criando tabela horario_aula */
  return knex.schema.createTable('horario_aula', tabela => {
    /* Campos da tabela horario_aula */
    tabela.increments('cd_horario_aula').primary();
    tabela.integer('dia_semana_horario_aula').notNullable();
    tabela.integer('comeco_horario_aula').notNullable();
    tabela.integer('fim_horario_aula').notNullable();

    /* Chave estrangeira. Relacionamento entre horario_aula e aula*/
    tabela.integer('id_aula')
      .notNullable()
      .references('cd_aula')
      .inTable('aula')
      /* O que acontece quando a aula for excluida. A opção CASCADE exclui o horario das aulas tambem */
      .onDelete('CASCADE')
      /* O que acontece com id_aula caso cd_aula for alterado */
      .onUpdate('CASCADE');
  })
}

/* Desfaz alterações caso dê ruim */
export async function down(knex: Knex){
  return knex.schema.dropTable('horario_aula');
}