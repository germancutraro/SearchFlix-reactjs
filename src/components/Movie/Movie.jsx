import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ imdbID, Poster, Title, Year  }) => (
    <div className="Movie">
      <img src={ Poster } className="Movie-Poster" alt="" />
      <small className="Movie-Title">{ Title }</small>
      <small className="Movie-Year">{ Year }</small>
    </div>
);

Movie.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired
};

export default Movie;