import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDirectorsQuery } from "../queries/queries";

class FilmAdder extends Component {
  displayDirectors() {
    const { data } = this.props;
    return data.loading ? (
      <option disabled>Loading directors...</option>
    ) : (
      data.directors.map(director => {
        return (
          <option key={director.id} value={director.id}>
            {director.name}
          </option>
        );
      })
    );
  }
  render() {
    return (
      <form>
        <h1>Add a film</h1>
        <div className="form-field">
          <label>Film title:</label>
          <input type="text" />
        </div>

        <div className="form-field">
          <label>Year:</label>
          <input type="text" />
        </div>

        <div className="form-field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="form-field">
          <label>Director:</label>
          <select>
            <option>Select director</option>
            {this.displayDirectors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getDirectorsQuery)(FilmAdder);
