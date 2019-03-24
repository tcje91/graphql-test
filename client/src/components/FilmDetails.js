import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFilmQuery } from "../queries/queries";

class FilmDetails extends Component {
  displayFilmDetails() {
    const { film } = this.props.data;
    return film ? (
      <div>
        <h2>{film.title}</h2>
        <p>
          {film.genre}, released {film.year}
        </p>
        <p>Directed by {film.director.name}</p>
        <p>Other films by this director:</p>
        <ul className="other-books">
          {film.director.films.map(otherFilm => {
            if (film.id !== otherFilm.id) {
              return (
                <li key={otherFilm.id}>
                  {otherFilm.title} - {otherFilm.year}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    ) : (
      <p>No film selected</p>
    );
  }

  render() {
    return <div id="film-details">{this.displayFilmDetails()}</div>;
  }
}

export default graphql(getFilmQuery, {
  options: props => {
    return {
      variables: {
        film_id: props.film_id
      }
    };
  }
})(FilmDetails);
