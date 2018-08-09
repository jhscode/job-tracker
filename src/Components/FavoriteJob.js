import React from 'react';

class FavoriteJob extends React.Component {
  render() {
    const { name, desc, title, source, date, filter } = this.props.details;
    return (
      <div className="favoriteJob">
        <div className="favoriteJob__wrapper">
          {filter && (
            <div className="favoriteJob__list">
              <li>
                <span>
                  <ul className="favoriteJob__name">Name: {name}</ul>
                  <ul className="favoriteJob__title">Title: {title}</ul>
                  <ul className="favoriteJob__source">Source: {source}</ul>
                  <ul className="favoriteJob__desc">Desc: {desc}</ul>
                  <ul className="favoriteJob__date">Date: {date}</ul>
                </span>
              </li>
            </div>
          )}
          <div>
            {filter && (
              <button className="deleteJob__btn" onClick={() => this.props.deleteJob(this.props.index)}>
                Delete
              </button>
            )}
            {filter && (
              <button className="removeFromFavorite__btn" onClick={() => this.props.addToFavorites(this.props.index)}>
                Remove From Favorites
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteJob;
