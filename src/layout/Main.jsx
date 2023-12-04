import React from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: []
		}

		this.searchMovies = this.searchMovies.bind(this);
	}

	searchMovies(search, type = 'all') {
		fetch(`http://www.omdbapi.com/?apikey=7e3f1687&s=${search !== '' ? `${search}` : 'matrix'}${type !== 'all' ? `&type=${type}` : ``}`)
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=7e3f1687&s=matrix')
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
	}

	render() {
		const { movies } = this.state;

		return <main className='container content'>
			<Search searchMovies={this.searchMovies}/>
			{
				movies.length ? (
					<Movies movies={movies} />
				) : <Preloader />
			}
		</main>
	}
}

export default Main;