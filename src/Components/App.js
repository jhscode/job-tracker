import React, { Component } from 'react';
import ListJob from './ListJob';
import CreateJob from './CreateJob';

class App extends Component {
  state = {
    jobs: {}
  };
  addJob = job => {
    console.log('adding a job');
  };

  render() {
    return (
      <div className="App">
        <CreateJob addJob={this.addJob} />
        <ListJob />
      </div>
    );
  }
}

export default App;
