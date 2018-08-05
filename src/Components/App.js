import React, { Component } from 'react';
import CreateJob from './CreateJob';
import ListJobs from './ListJobs';
import FavoriteJobsList from './FavoriteJobsList';
import Header from './Header';
import base from '../base';

class App extends Component {
  state = {
    jobs: {}
  };

  componentDidMount() {
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

  addToFavorites = key => {
    const jobs = { ...this.state.jobs };
    jobs[key].filter = !this.state.jobs[key].filter;
    this.setState({
      jobs: jobs
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <CreateJob addJob={this.addJob} />
        <ListJobs
          jobs={this.state.jobs}
          deleteJob={this.deleteJob}
          favoriteJobs={this.state.favoriteJobs}
          addToFavorites={this.addToFavorites}
        />
        <FavoriteJobsList
          jobs={this.state.jobs}
          deleteJob={this.deleteJob}
          favoriteJobs={this.state.favoriteJobs}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
