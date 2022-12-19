const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLScalarType,
} = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
});

const MerchantType = new GraphQLObjectType({
  name: 'MerchantDataType',
  fields: {
    id: { type: GraphQLString },
    merchant_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    is_active: { type: GraphQLBoolean },
    recorder_date_time: { type: GraphQLString },
  },
});
const MerchantTypeQ = new GraphQLObjectType({
  name: 'MerchantDataTypeQ',
  fields: {
    id: { type: GraphQLString },
    merchant_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    is_active: { type: GraphQLBoolean },
    recorder_date_time: { type: GraphQLString },
  },
});
const SuccessOperation = new GraphQLObjectType({
  name: 'SuccessOperation',
  fields: {
    message: { type: GraphQLString },
  },
});

module.exports = { MerchantType, MerchantTypeQ, SuccessOperation };
