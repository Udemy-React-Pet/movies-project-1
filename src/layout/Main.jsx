import React from 'react';

import Movies from '../components/Movies';

class Main extends React.Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=7e3f1687&s=matrix')
			.then(result => result.json())
			.then(data => this.setState({movies: data.Search}));
	}

	render() {
		const { movies } = this.state;

		return <main className='container content'>
			{
				movies.length ? (
					<Movies movies={movies} />
				) : <h3>Loading...</h3>
			}
		</main>
	}
}

export default Main;
