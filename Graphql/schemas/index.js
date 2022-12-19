const { GraphQLSchema } = require('graphql');
const { query } = require('../queries');
const { mutation } = require('../mutations');

const schema = new GraphQLSchema({
  query: query,
  mutation: mutation,
});

module.exports = schema;
