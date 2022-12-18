if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routes');
// const errHandler = require('./middleware/errhandler')

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// insert db connection here

// API method using rest API
app.use('/', route);

app.listen(port, () => {
  console.log(`Connection to port: ${port} successfully coonected !!!`);
});
