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
  static UpdateMerchantById() {
    console.log('success --- UpdateMerchantById');
    res.send('success --- UpdateMerchantById');
  }
  static DeleteMerchantById() {
    console.log('success --- DeleteMerchantById');
    res.send('success --- DeleteMerchantById');
  }
}

module.exports = Controller;
