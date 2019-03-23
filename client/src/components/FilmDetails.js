import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFilmQuery } from "../queries/queries"

class FilmDetails extends Component {
  render() {
    return (
      <div id="film-details">
        <p>Film details here...</p>
      </div>
    );
  }
}

export default graphql(getFilmQuery)(FilmDetails);
