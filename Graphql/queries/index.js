const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const MerchantController = require('../../controllers');
const { MerchantTypeQ } = require('../types');

const getMerchants = {
  type: new GraphQLList(MerchantTypeQ),
  args: {
    order: { type: GraphQLString },
    limit: { type: GraphQLInt },
    start: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    try {
      const data = await MerchantController.getMerchants(args);
      return data;
    } catch (error) {
      return error;
    }
  },
};
const getMerchantDetail = {
  type: MerchantTypeQ,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve: async (_, args) => {
    try {
      const data = await MerchantController.getMerchantById(args);
      return data;
    } catch (error) {
      return error;
    }
  },
};

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getMerchants,
    getMerchantDetail,
  },
});
module.exports = {
  query,
};
