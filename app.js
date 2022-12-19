if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
// GraphQL Init
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const Schema = require('./graphql/schemas');

const app = express();
const port = process.env.PORT || 8171;
// const route = require('./routes');
// const errHandler = require('./middleware/errhandler')

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  '/gql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});

// insert db connection here
// const pg = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });

// API method using rest API
// app.use('/', route);

// app.listen(port, () => {
//   console.log(`Connection to port: ${port} successfully coonected !!!`);
// });

// GraphQL initiate server
