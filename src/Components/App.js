import React, { Component } from 'react';
import Job from './Job';
import CreateJob from './CreateJob';
import ListJobs from './ListJobs';
import base from '../base';

class App extends Component {
  state = {
    jobs: {}
  };

  componentWillMount() {
    this.ref = base.syncState('jobs', {
      context: this,
      state: 'jobs'
    });
  }

  componentWillUnMount() {
    base.removeBinding(this.ref);
  }

  deleteJob = key => {
    const jobs = { ...this.state.jobs };
    jobs[key] = null;
    this.setState({ jobs: jobs });
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
        <ListJobs jobs={this.state.jobs} deleteJob={this.deleteJob} />
      </div>
    );
  }
}

export default App;
