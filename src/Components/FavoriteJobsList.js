import React from 'react';
import FavoriteJob from './FavoriteJob';

class FavoriteJobsList extends React.Component {
  render() {
    return (
      <div className="favoriteJobsList__wrapper">
        <h3>Favorite Jobs</h3>
        <ul>
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
    );
  }
}

export default FavoriteJobsList;
