// Update with your config settings.
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.KNEX_Connection_Database,
      user: process.env.KNEX_Connection_User,
      password: process.env.KNEX_Connection_Password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'Merchants',
    },
  },
};
