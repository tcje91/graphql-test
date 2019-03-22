const app = require("express")();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const { username, password } = require("./config");

mongoose.connect(
  `mongodb+srv://${username}:${password}@graphql-test-filmdb-y3sp1.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

module.exports = app;
