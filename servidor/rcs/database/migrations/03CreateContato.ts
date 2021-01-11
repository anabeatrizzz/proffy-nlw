import Knex from 'knex';

/* Indica quais alterações fazer no banco de dados */
export async function up(knex: Knex){
  /* Criando tabela contato */
  return knex.schema.createTable('contato', tabela => {
    /* Chave estrangeira. Relacionamento entre usuario e contato */
    tabela.integer('id_usuario')
      .notNullable()
      .references('cd_usuario')
      .inTable('usuario')
      /* O que acontece quando o prof for excluido. A opção CASCADE exclui os contatos que o prof recebeu tambem */
      .onDelete('CASCADE')
      /* O que acontece com id_usuarios caso cd_usuario for alterado */
      .onUpdate('CASCADE');

    tabela.timestamp('criado_em')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

/* Desfaz alterações caso dê ruim */
export async function down(knex: Knex){
  return knex.schema.dropTable('contato');
}