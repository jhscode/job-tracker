import React, { Fragment } from 'react';

class Job extends React.Component {
  render() {
    const { name, desc, title, source, date, filter } = this.props.details;
    return (
      <div>
        {!filter && (
          <li>
            Name: {name}
            Desc: {desc}
            Title: {title}
            Source: {source}
            Date: {date}
          </li>
        )}
        <div>
          {!filter && (
            <button onClick={() => this.props.deleteJob(this.props.index)}>
              Delete
            </button>
          )}
          {!filter && (
            <button onClick={() => this.props.addToFavorites(this.props.index)}>
              Add To Favorites
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Job;
