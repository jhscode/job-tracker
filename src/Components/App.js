import React, { Component } from 'react';
import CreateJob from './CreateJob';
import ListJobs from './ListJobs';
import FavoriteJobsList from './FavoriteJobsList';
import Header from './Header';
import Footer from './Footer';
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

  // componentWillUnMount() {
  //   base.removeBinding(this.ref);
  // }

  deleteJob = key => {
    // Create a copy of the existing state
    const jobs = { ...this.state.jobs };
    // Delete job from database
    jobs[key] = null;
    // Set state to new jobs
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
    // can just be jobs
    });
  };

  addToFavorites = key => {
    const jobs = { ...this.state.jobs };
    jobs[key].filter = !this.state.jobs[key].filter;
    this.setState({
      jobs: jobs
      // can just be jobs
    });
  };

  render() {
    return (
      <div className="app__container">
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
        <Footer />
        </div>
    );
  }
}

export default App;
