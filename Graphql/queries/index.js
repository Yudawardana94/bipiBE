const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
} = require('graphql');
const MerchantController = require('../../controllers');
const { MerchantTypeQ } = require('../types');

const getMerchants = {
  type: new GraphQLList(MerchantTypeQ),
  resolve: async () => {
    try {
      const data = await MerchantController.getMerchants();
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
