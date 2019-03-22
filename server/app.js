const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

module.exports = app;