const {
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLScalarType,
  GraphQLObjectType,
} = require('graphql');
const MerchatController = require('../../controllers');
const { MerchantType } = require('../types');
// const axios = require('axios');

// const dateScalar = new GraphQLScalarType({
//   name: 'Date',
//   parseValue(value) {
//     return new Date(value);
//   },
//   serialize(value) {
//     return value.toISOString();
//   },
// });

const args = {
  id: { type: GraphQLString },
  merchant_name: { type: GraphQLString },
  phone_number: { type: GraphQLString },
  latitude: { type: GraphQLFloat },
  longitude: { type: GraphQLFloat },
  is_active: { type: GraphQLBoolean },
  recorder_date_time: { type: GraphQLString },
};

const addMerchant = {
  type: MerchantType,
  args,
  resolve: async (_, args) => {
    console.log('come here -- addMerchant');
    try {
      let data = await MerchatController.createMerchant(args);
      console.log(data);
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
    console.log('come here -- editMerchant');
    try {
      let data = await MerchatController.UpdateMerchantById(args);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  },
};
const deleteMerchant = {
  type: MerchantType,
  args: { id: { type: GraphQLString } },
  resolve: async (_, args) => {
    console.log('come here -- deleteMerchant');
    try {
      let data = await MerchatController.DeleteMerchantById(args);
      console.log(data);
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
