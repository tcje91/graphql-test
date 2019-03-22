const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const FilmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    film_id: { type: GraphQLString },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    film: {
      type: FilmType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to fetch book from db
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
