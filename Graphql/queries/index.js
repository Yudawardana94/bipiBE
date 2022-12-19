const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
} = require('graphql');
const MerchantController = require('../../controllers');
const { MerchantTypeQ } = require('../types');

const dataDumm = [
  {
    id: '1',
    merchant_name: 'Bakso',
    phone_number: '08765432345678',
    latitude: 123.423,
    longitude: 122.3456,
    is_active: true,
    recorder_date_time: new Date(),
  },
  {
    id: '2',
    merchant_name: 'Siomay',
    phone_number: '08765432345678',
    latitude: 123.423,
    longitude: 122.3456,
    is_active: true,
    recorder_date_time: new Date(),
  },
  {
    id: '3',
    merchant_name: 'Pangsit',
    phone_number: '08765432345678',
    latitude: 123.423,
    longitude: 122.3456,
    is_active: true,
    recorder_date_time: new Date(),
  },
  {
    id: '4',
    merchant_name: 'Bihun',
    phone_number: '08765432345678',
    latitude: 123.423,
    longitude: 122.3456,
    is_active: true,
    recorder_date_time: new Date(),
  },
  {
    id: '5',
    merchant_name: 'Batagor',
    phone_number: '08765432345678',
    latitude: 123.423,
    longitude: 122.3456,
    is_active: true,
    recorder_date_time: new Date(),
  },
];

const getMerchants = {
  type: new GraphQLList(MerchantTypeQ),
  resolve: async () => {
    console.log('calll herreee');
    try {
      //   const data = await MerchantController.getMerchants();
      //   return data;
      return dataDumm;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  },
};
const getMerchantDetail = {
  type: MerchantTypeQ,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve: async (_, args) => {
    console.log('ca;; here');
    try {
      //   const data = await MerchantController.getMerchantById(args);
      return data;
      //   return dataDumm;
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
