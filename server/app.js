const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

app.use('/graphql', graphqlHTTP({
  schema
}))

module.exports = app;