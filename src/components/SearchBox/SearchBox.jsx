import React from "react";
import PropTypes from 'prop-types';
import "./SearchBox.css";

class SearchBox extends React.Component {
  state = {inputValue: '', API_KEY: '651569d9'};

  onChangeHandler = e => this.setState({ inputValue: e.target.value });

  onClickHandler = e => {
    const { inputValue, API_KEY } = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`)
      .then(res => res.json())
      .then(data => {
        const { Search = [] } = data;
        // console.log(Search);
        this.props.getMovies(Search)
      })
      .catch(err => new Error(err));
  };

  render() {
    return (
      <div className="SearchBox-wrapper">
        <input
          type="text"
          placeholder="Search for a movie"
          autoFocus="on"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          onChange={this.onChangeHandler}
        />
        <button className="SearchBox-button" onClick={ this.onClickHandler }>Search</button>
      </div>
    );
  }
}

SearchBox.propTypes =  {
  getMovies: PropTypes.func.isRequired
};

export default SearchBox;
