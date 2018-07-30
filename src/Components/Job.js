import React from 'react';

class Job extends React.Component {
  render() {
    const { name, desc, title, source, date } = this.props.details;
    return (
      <div>
        <li>
          Name: {name}
          Desc: {desc}
          Title: {title}
          Source: {source}
          Date: {date}
        </li>
        <button onClick={() => this.props.deleteJob(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Job;
