import React, { Component } from 'react';
import ListJob from './ListJob';
import AddJob from './AddJob';

class App extends Component {
  state = {
    jobs: {}
  };

  render() {
    return (
      <div className="App">
        <AddJob searchInput={this.state.jobs} />
        <ListJob />
      </div>
    );
  }
}

export default App;
