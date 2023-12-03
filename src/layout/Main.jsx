import React from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: [],
			url: {
				base: 'http://www.omdbapi.com/?apikey=7e3f1687',
				search: 'matrix',
				type: ''
			}
		}

		this.searchMovies = this.searchMovies.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
	}

	searchMovies(searchEndpoint) {
		this.setState((prevState) => ({
			url: {...prevState.url, search: searchEndpoint}
		}));

		const { base } = this.state.url;

		fetch(`${base}&s=${searchEndpoint}`)
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
	}

	handleTypeChange(e) {
		const { base, search } = this.state.url;

		if (e.target.value === 'Any') {
			this.setState((prevState) => ({
				url: {...prevState.url, type: ''}
			}));


			fetch(`${base}&s=${search}`)
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
		} else {
			this.setState((prevState) => ({
				url: {...prevState.url, type: e.target.value}
			}));

			fetch(`${base}&s=${search}&type=${e.target.value}`)
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
		}
	}

	componentDidMount() {
		const { base, search } = this.state.url;

		fetch(`${base}&s=${search}`)
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
	}

	render() {
		const { movies } = this.state;

		return <main className='container content'>
			<Search searchMovies={this.searchMovies} handleTypeChange={this.handleTypeChange}/>
			{
				movies.length ? (
					<Movies movies={movies} />
				) : <Preloader />
			}
		</main>
	}
}

export default Main;
