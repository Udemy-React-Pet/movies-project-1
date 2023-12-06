import React from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

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
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((result) => result.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
			.catch((err) => {
				console.log(err);
				this.setState({loading: false});
			});
  }

  searchMovies(search, type = 'all') {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
        search !== '' ? `${search}` : 'matrix'
      }${type !== 'all' ? `&type=${type}` : ``}`
    )
      .then((result) => result.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
			.catch((err) => {
				console.log(err);
				this.setState({loading: false});
			});
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
				<h6>Results found: <span>{movies.length ? movies.length : 0}</span></h6>
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;