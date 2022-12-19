// Update with your config settings.
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'Merchants',
      user: 'mymac',
      password: '',
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
