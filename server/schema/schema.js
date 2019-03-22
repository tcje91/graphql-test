const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID
} = graphql;

//dummy data
const films = [
  { film_id: "1", title: "Alita: Battle Angel", genre: "Sci-Fi", year: 2019 },
  { film_id: "2", title: "Blade Runner", genre: "Sci-Fi", year: 1982 },
  { film_id: "3", title: "The Big Lebowski", genre: "Comedy", year: 1998 }
];

const directors = [
  { director_id: "1", name: "Robert Rodriguez", age: 50 },
  { director_id: "2", name: "Ridley Scott", age: 81 },
  { director_id: "3", name: "Ethan Cohen", age: 61 }
];

const FilmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    film_id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLInt }
  })
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    director_id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    film: {
      type: FilmType,
      args: { film_id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to fetch book from db
        return _.find(films, { film_id: args.film_id });
      }
    },
    director: {
      type: DirectorType,
      args: { director_id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(directors, { director_id: args.director_id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
