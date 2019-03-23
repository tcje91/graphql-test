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

const getDirectorsQuery = gql`
  {
    directors {
      name
      id
    }
  }
`;

const addFilmMutation = gql`
  mutation(
    $title: String!
    $year: Int!
    $genre: String!
    $director_id: ID!
  ) {
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

export { getFilmsQuery, getDirectorsQuery, addFilmMutation };
