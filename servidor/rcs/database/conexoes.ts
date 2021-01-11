/* Biblioteca para podermos escrever SQL na sintaxe JS */
import knex from 'knex';

/* Caminhando por pastas de outra forma */
import path from 'path';

// Migrations controlam a versão do banco de dados. Dentro delas descrevemos o que queremos fazer no banco (criar tabelas e colunas novas, deletar campo, alterar o tipo da coluna, etc)

const db = knex({
  /* Tipo do banco de dados */
  client: 'sqlite3',
  connection: {
    /*
      Em qual arquivo está o banco sqlite3
      path.resolve(diretorio_do_arquivo, 'arquivo')
    */
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  /* Para o sqlite usar null quando não souber o tipo de dado de um campo */
  useNullAsDefault: true
})

export default db;