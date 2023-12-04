import React from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=7e3f1687&s=matrix')
      .then((result) => result.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies(search, type = 'all') {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=7e3f1687&s=${
        search !== '' ? `${search}` : 'matrix'
      }${type !== 'all' ? `&type=${type}` : ``}`
    )
      .then((result) => result.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;