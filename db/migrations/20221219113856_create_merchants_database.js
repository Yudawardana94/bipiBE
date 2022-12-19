/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const tableName = 'merchants';
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.string('merchant_name').notNullable();
    table.string('phone_number').notNullable();
    table.float('latitude');
    table.float('longitude');
    table.boolean('is_active');
    table.dateTime('recorder_date_time');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
