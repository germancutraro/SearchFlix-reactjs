import React from "react";
import PropTypes from 'prop-types';
import "./NavBar.css";
import SearchBox from "../../components/SearchBox/SearchBox";

const NavBar = ({ getMovies }) => (
  <nav className="NavBar-Wrapper">
    <h3 className="NavBar-Active">MOVIES</h3>
    <div className="NavBar-Logo-Wrapper">
      <h1 className="NavBar-Logo">SEARCHFLIX</h1>
    </div>
    <SearchBox getMovies={getMovies} />
  </nav>
);

NavBar.propTypes = {
  getMovies: PropTypes.func.isRequired
};

export default NavBar;
