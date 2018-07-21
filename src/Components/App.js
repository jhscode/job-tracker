import React, { Component } from 'react';
import ListJob from './ListJob';
import CreateJob from './CreateJob';

class App extends Component {
  state = {
    jobs: {}
  };
  addJob = job => {
    // Create a copy of the existing state
    const jobs = { ...this.state.jobs };
    // Add new job to that jobs variable
    jobs[`job${Date.now()}`] = job;
    // Set to state
    this.setState({
      jobs: jobs
    });
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
