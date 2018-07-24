import React from 'react';

class Job extends React.Component {
  render() {
    return (
      <li>
        Name: {this.props.details.name}
        Desc: {this.props.details.desc}
        Sent: {this.props.details.sent}
        Title: {this.props.details.title}
        Source: {this.props.details.source}
        Date: {this.props.details.date}
      </li>
    );
  }
}

export default Job;
