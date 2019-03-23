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

const addFilmMutation  = gql`
  mutation {
    addFilm(title: "", year:"", genre: "", director_id: ""){
      title
      id
    }
  }
`

export { getFilmsQuery, getDirectorsQuery, addFilmMutation };
