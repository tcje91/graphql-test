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

const FilmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLInt },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return Director.findById(parent.director_id);
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    films: {
      type: new GraphQLList(FilmType),
      resolve(parent, args) {
        console.log(parent);
        return Film.find({ director_id: parent.id });
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
        return Film.findById(args.film_id);
      }
    },
    director: {
      type: DirectorType,
      args: { director_id: { type: GraphQLID } },
      resolve(parent, args) {
        return Director.findById(args.director_id);
      }
    },
    films: {
      type: new GraphQLList(FilmType),
      resolve(parent, args) {
        return Film.find({});
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return Director.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDirector: {
      type: DirectorType,
      args:{
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let director = new Director({
          name: args.name,
          age: args.age
        })
        return director.save()
      }
    },
    addFilm: {
      type: FilmType,
      args: {
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        year: { type: GraphQLInt },
        director_id: { type: GraphQLID }
      },
      resolve(parent, args) {
        let film = new Film({
          title: args.title,
          genre: args.genre,
          year: args.year,
          director_id: args.director_id
        })
        return film.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
