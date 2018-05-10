import React, { Component } from 'react';
import Layout from './views/Layout/Layout';
import Navbar from './views/NavBar/NavBar';
import Main from './views/Main/Main';

class App extends Component {
  state = { movies: [], API_KEY: '651569d9' };

  componentDidMount() {
    const { API_KEY } = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Thor`)
      .then(res => res.json())
      .then(data => {
        const { Search = [] } = data;
        this.setState({ movies: Search })
      })
      .catch(err => new Error(err));
  }

  getMovies = movies => {
    this.setState({ movies });
  };
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Navbar getMovies={ this.getMovies }/>
          { this.state.movies.length > 0 
              ? <Main movies={ this.state.movies }/> 
              : <h1 style={{ color: '#fff', textAlign: 'center', fontWeight: 'lighter' }}>Not Found!</h1> 
          }    
        </Layout>
      </div>
    );
  }
}

export default App;
