import React from 'react';

class Job extends React.Component {
  render() {
    const { name, desc, title, source, date, filter } = this.props.details;
    return (
      <div className="job__wrapper">
        {!filter && (
          <li className="job__list">
            <ul className="job__name">Name: {name}</ul>
            <ul className="job__title">Title: {title}</ul>
            <ul className="job__source">Source: {source}</ul>
            <ul className="job__date">Date: {date}</ul>
            <ul className="job__desc">Desc: {desc}</ul>

          </li>
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
