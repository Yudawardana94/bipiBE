const {
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInt,
} = require('graphql');
const MerchatController = require('../../controllers');
const { MerchantType, SuccessOperation } = require('../types');

const args = {
  id: { type: GraphQLInt },
  merchant_name: { type: GraphQLString },
  phone_number: { type: GraphQLString },
  latitude: { type: GraphQLFloat },
  longitude: { type: GraphQLFloat },
  is_active: { type: GraphQLBoolean },
  recorder_date_time: { type: GraphQLString },
};

const addMerchant = {
  type: SuccessOperation,
  args,
  resolve: async (_, args) => {
    try {
      let data = await MerchatController.createMerchant(args);
      return data;
    } catch (error) {
      return error;
    }
  },
};
const editMerchant = {
  type: MerchantType,
  args,
  resolve: async (_, args) => {
    try {
      const id = args.id;
      let newArgs = { ...args };
      delete newArgs.id;

      let data = await MerchatController.UpdateMerchantById(id, newArgs);
      return data;
    } catch (error) {
      return error;
    }
  },
};
const deleteMerchant = {
  type: SuccessOperation,
  args: { id: { type: GraphQLInt } },
  resolve: async (_, args) => {
    try {
      let data = await MerchatController.DeleteMerchantById(args);
      return data;
    } catch (error) {
      return error;
    }
  },
};

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMerchant,
    editMerchant,
    deleteMerchant,
  },
});
module.exports = {
  mutation,
};
