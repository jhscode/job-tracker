import React from 'react';

class FavoriteJob extends React.Component {
  render() {
    const { name, desc, title, source, date, filter } = this.props.details;
    return (
      <div>
        {filter && (
          <div className="favoriteJob__list">
            <li className="favoriteJob__name">Name: {name}</li>
            <li className="favoriteJob__title">Title: {title}</li>
            <li className="favoriteJob__source">Source: {source}</li>
            <li className="favoriteJob__desc">Desc: {desc}</li>
            <li className="favoriteJob__date">Date: {date}</li>
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
    );
  }
}

export default FavoriteJob;
