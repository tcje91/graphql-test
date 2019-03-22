const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

//dummy data
const films = [
  { film_id: "1", title: "Alita: Battle Angel", genre: "Sci-Fi", year: 2019 },
  { film_id: "2", title: "Blade Runner", genre: "Sci-Fi", year: 1982 },
  { film_id: "3", title: "The Big Lebowski", genre: "Comedy", year: 1998 }
];

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
      args: { film_id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to fetch book from db
        return _.find(films, { film_id: args.film_id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
