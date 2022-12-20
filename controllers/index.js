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
  static async getMerchants({ order, limit, start }) {
    try {
      const merchantlist = await knex('merchants')
        .orderBy('id', order)
        .limit(limit)
        .offset(start);
      return merchantlist;
    } catch (error) {
      return error;
    }
  }
  static async getMerchantById(args) {
    const { id } = args;
    const merchant = await knex('merchants').where({ id: id });
    return merchant[0];
  }
  static async UpdateMerchantById(id, args) {
    try {
      await knex('merchants').where({ id }).update(args);
      const updatedMerchant = await knex('merchants').where({ id });
      return updatedMerchant[0];
    } catch (error) {
      return error;
    }
  }

  static async UpdateMerchantActiveStatus({ id }) {
    try {
      console.log(id, '---id Arr');
      const selectedMerchants = await knex('merchants')
        .whereIn('id', id)
        .select();
      const updateMaterial = selectedMerchants.map((merchant) => {
        return knex('merchants').where('id', merchant.id).update({
          is_active: !merchant.is_active,
        });
      });
      await Promise.all(updateMaterial);
      return {
        message: 'Success Update merchant status',
      };
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
