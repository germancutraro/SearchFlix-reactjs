import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../../components/MoviesList/MoviesList';

const Main = ({ movies }) => (
  <main>
    <MoviesList movies={ movies } />
 </main>
);

Main.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Main;