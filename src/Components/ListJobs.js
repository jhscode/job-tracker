import React, { Fragment } from 'react';
import Job from './Job';

class ListJobs extends React.Component {
  render() {
    return (
      <div className="listJobs__wrapper">
        <h3 className="listJobs__header">List of the Jobs you applied:</h3>
          <ul className="listJobs__list">
            {Object.keys(this.props.jobs).map(key => (
              <Job
                key={key}
                index={key}
                details={this.props.jobs[key]}
                deleteJob={this.props.deleteJob}
                addToFavorites={this.props.addToFavorites}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default ListJobs;
