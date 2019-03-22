const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const FilmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    film_id: { type: GraphQLString },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLInt }
  })
});
