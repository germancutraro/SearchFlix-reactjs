import React from "react";
import PropTypes from 'prop-types';
import './MoviesList.css';
import Movie from "../../components/Movie/Movie";

const MoviesList = ({ movies }) => {
  return (
    <div className="Movies-Wrapper">
      { movies.map(movie => <Movie key={movie.imdbID} {...movie} />) }
    </div>
  );
};

MoviesList.propTypes = { 
  movies: PropTypes.array.isRequired
};

export default MoviesList;
