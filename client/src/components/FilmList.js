import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFilmsQuery } from "../queries/queries"
import FilmDetails from "./FilmDetails";

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
        <FilmDetails />
      </div>
    );
  }
}

export default graphql(getFilmsQuery)(FilmList);
