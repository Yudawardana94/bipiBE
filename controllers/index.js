const knex = require('../db/db');

class Controller {
  static async createMerchant(args) {
    try {
      await knex('merchants').insert(args);
      return {
        message: 'success add merchant data',
      };
    } catch (error) {
      return error;
    }
  }
  static async getMerchants() {
    try {
      const merchantlist = await knex.select().from('merchants');
      return merchantlist;
    } catch (error) {
      return error;
    }
  }
  static async getMerchantById(args) {
    const { id } = args;
    const merchant = await knex('merchants').where({ id: id }).select();
    return merchant[0];
  }
  static async UpdateMerchantById(id, args) {
    try {
      await knex('merchants').where({ id }).update(args);
      const updatedMerchant = await knex('merchants').where({ id }).select();
      return updatedMerchant[0];
    } catch (error) {
      return error;
    }
  }
  static async DeleteMerchantById({ id }) {
    try {
      await knex('merchants').where('id', id).del();
      return {
        message: 'Success delete merchant',
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = Controller;
