import React, { Component } from 'react';
import FilmList from './components/FilmList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Film List</h1>
        <FilmList />
      </div>
    );
  }
}

export default App;
