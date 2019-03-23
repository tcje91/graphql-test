import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import FilmList from "./components/FilmList";

const client = new ApolloClient({
  uri: "http://localhost:9090/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Film List</h1>
          <FilmList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
