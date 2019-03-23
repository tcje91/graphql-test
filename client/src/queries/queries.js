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

export { getFilmsQuery, getDirectorsQuery };
