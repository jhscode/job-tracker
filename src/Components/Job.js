import React from 'react';

class Job extends React.Component {
  render() {
    return (
      <div>
        <li>
          Name: {this.props.details.name}
          Desc: {this.props.details.desc}
          Title: {this.props.details.title}
          Source: {this.props.details.source}
          Date: {this.props.details.date}
        </li>
        <button onClick={() => this.props.deleteJob(this.props.index)}>
          Delete
        </button>
        <button>Add To Favorites</button>
      </div>
    );
  }
}

export default Job;
