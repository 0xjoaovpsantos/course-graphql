const { connection } = require('./.env')
// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
