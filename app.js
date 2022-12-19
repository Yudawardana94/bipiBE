if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
// GraphQL Init
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./graphql/schemas');

const app = express();
const port = process.env.PORT || 8171;

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
