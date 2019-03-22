const graphql = require("graphql");
const _ = require("lodash");
const Film = require("../models/film");
const Director = require("../models/director");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

//dummy data
// const films = [
//   {
//     film_id: "1",
//     title: "Alita: Battle Angel",
//     genre: "Sci-Fi",
//     year: 2019,
//     director_id: "1"
//   },
//   {
//     film_id: "2",
//     title: "Blade Runner",
//     genre: "Sci-Fi",
//     year: 1982,
//     director_id: "2"
//   },
//   {
//     film_id: "3",
//     title: "The Big Lebowski",
//     genre: "Comedy",
//     year: 1998,
//     director_id: "3"
//   },
//   {
//     film_id: "4",
//     title: "Alien",
//     genre: "Horror",
//     year: 1979,
//     director_id: "2"
//   },
//   {
//     film_id: "5",
//     title: "Gladiator",
//     genre: "Drama",
//     year: 2000,
//     director_id: "2"
//   },
//   {
//     film_id: "6",
//     title: "Sin City",
//     genre: "Thriller",
//     year: 2005,
//     director_id: "1"
//   }
// ];

// const directors = [
//   { director_id: "1", name: "Robert Rodriguez", age: 50 },
//   { director_id: "2", name: "Ridley Scott", age: 81 },
//   { director_id: "3", name: "Ethan Cohen", age: 61 }
// ];

const FilmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    film_id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLInt },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        // return _.find(directors, { director_id: parent.director_id });
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    director_id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    films: {
      type: new GraphQLList(FilmType),
      resolve(parent, args) {
        // return _.filter(films, { director_id: parent.director_id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    film: {
      type: FilmType,
      args: { film_id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(films, { film_id: args.film_id });
      }
    },
    director: {
      type: DirectorType,
      args: { director_id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(directors, { director_id: args.director_id });
      }
    },
    films: {
      type: new GraphQLList(FilmType),
      resolve(parent, args) {
        return films;
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return directors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
