const app = require('express')();
const graphqlHTTP = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    
}))

module.exports = app;