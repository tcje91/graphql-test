import { gql } from "apollo-boost";

const getFilmsQuery = gql`
  {
    films {
      title
      year
      id
    }
  }
`;

const getFilmQuery = gql`
  query($film_id: ID) {
    film(film_id: $film_id) {
      id
      title
      genre
      year
      director {
        id
        name
        age
        films {
          id
          title
          year
        }
      }
    }
  }
`;

const getDirectorsQuery = gql`
  {
    directors {
      name
      id
    }
  }
`;

const addFilmMutation = gql`
  mutation($title: String!, $year: Int!, $genre: String!, $director_id: ID!) {
    addFilm(
      title: $title
      year: $year
      genre: $genre
      director_id: $director_id
    ) {
      title
      id
    }
  }
`;

export { getFilmsQuery, getFilmQuery, getDirectorsQuery, addFilmMutation };
