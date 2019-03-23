import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getFilmsQuery = gql`
  {
    films {
      title
      year
    }
  }
`;

class FilmList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          <li>Film 1</li>
          <li>Film 2</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getFilmsQuery)(FilmList);
