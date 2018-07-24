import React, { Fragment } from 'react';
import Job from './Job';

class ListJobs extends React.Component {
  render() {
    return (
      <Fragment>
        <h3>List of the Jobs you applied:</h3>
        <ul>
          {Object.keys(this.props.jobs).map(key => (
            <Job key={key} details={this.props.jobs[key]} />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default ListJobs;
