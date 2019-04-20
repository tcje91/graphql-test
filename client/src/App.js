import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import FilmList from "./components/FilmList";
import FilmAdder from "./components/FilmAdder";

const client = new ApolloClient({
  uri: "https://graphql-film-app.herokuapp.com/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Film List</h1>
          <FilmList />
          <FilmAdder />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
