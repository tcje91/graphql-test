import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getFilmsQuery = gql`
  {
    films {
      title
      year
      id
    }
  }
`;

class FilmList extends Component {
  renderFilms() {
    const { data } = this.props;
    return data.loading ? (
      <div>Loading...</div>
    ) : (
      data.films.map(film => (
        <li key={film.id}>
          {film.title} - {film.year}
        </li>
      ))
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderFilms()}
        </ul>
      </div>
    );
  }
}

export default graphql(getFilmsQuery)(FilmList);
