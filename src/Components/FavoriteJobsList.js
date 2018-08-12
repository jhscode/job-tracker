import React from 'react';
import FavoriteJob from './FavoriteJob';

class FavoriteJobsList extends React.Component {
  render() {
    return (
      <div className="favoriteJobsList__wrapper">
        <h3 className="favoriteJobsList__title">Favorite Jobs</h3>
        <div>
        <ul className="favoriteJobList__list">
          {Object.keys(this.props.jobs).map(key => (
            <FavoriteJob
              key={key}
              index={key}
              details={this.props.jobs[key]}
              deleteJob={this.props.deleteJob}
              addToFavorites={this.props.addToFavorites}
            />
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default FavoriteJobsList;
