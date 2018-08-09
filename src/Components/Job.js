import React from 'react';

class Job extends React.Component {
  render() {
    const { name, desc, title, source, date, filter } = this.props.details;
    return (
      <div className="job__wrapper">
        {!filter && (
          <div className="job__list">
            <li className="job__name">Name: {name}</li>
            <li className="job__title">Title: {title}</li>
            <li className="job__source">Source: {source}</li>
            <li className="job__date">Date: {date}</li>
            <li className="job__desc">Desc: {desc}</li>
          </div>
        )}
        <div>
          {!filter && (
            <button className="deleteJob__btn" onClick={() => this.props.deleteJob(this.props.index)}>
              Delete
            </button>
          )}
          {!filter && (
            <button className="addToFavorite__btn" onClick={() => this.props.addToFavorites(this.props.index)}>
              Add To Favorites
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Job;
