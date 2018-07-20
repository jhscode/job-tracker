import React, { Component } from 'react';
import ListJob from './ListJob';
import AddJob from './AddJob';

class App extends Component {
  state = {
    searchInput: {}
  };

  render() {
    return (
      <div className="App">
        <AddJob searchInput={this.searchInput} />
        <ListJob />
      </div>
    );
  }
}

export default App;
