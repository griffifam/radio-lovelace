import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
class Track extends React.Component {
  constructor({title, artist, playtime, albumart, favorite}) {
    super();
    this.state = {
      trackTitle: title,
      trackArtist: artist,
      trackPlaytime: playtime,
      trackAlbumart: albumart,
      trackFavorite: favorite
    };
  }
  // const Track = ({title, artist, playtime, albumart, favorite}) => {
  handleFavorite = () => {
    console.log("hello");
    this.setState({
      trackFavorite: !this.state.trackFavorite
      });
  };

  render() {
    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${this.state.trackTitle}`} src={this.state.trackAlbumart} />
        <h3 className="track--title">{this.state.trackTitle}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          checked={!this.state.trackFavorite}
          onChange={this.handleFavorite}
          />
        <p className="track--artist">{this.state.trackArtist}</p>
        <p className="track--playtime">{this.state.trackPlaytime}</p>
        <button
          className="track--control track--to-top"
          >
          <span role="img" aria-label="send to top">🔝</span>
        </button>
        <button
          className="track--control track--switch"
          >
          <span role="img" aria-label="switch lists">↔</span>
        </button>
      </li>
    );
  }
}


Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
