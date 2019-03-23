import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFilmsQuery } from "../queries/queries";
import FilmDetails from "./FilmDetails";

class FilmList extends Component {
  state = {
    selectedFilm: null
  };

  renderFilms() {
    const { data } = this.props;
    return data.loading ? (
      <div>Loading...</div>
    ) : (
      data.films.map(film => (
        <li
          key={film.id}
          onClick={e => this.setState({ selectedFilm: film.id })}
        >
          {film.title} - {film.year}
        </li>
      ))
    );
  }

  render() {
    const { selectedFilm } = this.state;
    return (
      <div>
        <ul>{this.renderFilms()}</ul>
        <FilmDetails film_id={selectedFilm} />
      </div>
    );
  }
}

export default graphql(getFilmsQuery)(FilmList);
