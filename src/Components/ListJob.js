import React from 'react';
import Job from './Job';

class ListJob extends React.Component {
  render() {
    return (
      <div>
        <div>List of all Jobs</div>
        <Job />
      </div>
    );
  }
}

export default ListJob;
