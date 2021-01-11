import path from 'path';

module.exports = {
  /* Tipo do banco de dados */
  client: 'sqlite3',
  connection: {
    /*
      Em qual arquivo está o banco sqlite3
      path.resolve(diretorio_do_arquivo, 'arquivo')
    */
    filename: path.resolve(__dirname, 'rcs', 'database', 'database.sqlite')
  },
  migrations: {
    /* Em qual arquivo estão as migrações */
    directory: path.resolve(__dirname, 'rcs', 'database', 'migrations')
  },
  /* Para o sqlite usar null quando não souber o tipo de dado de um campo */
  useNullAsDefault: true
};