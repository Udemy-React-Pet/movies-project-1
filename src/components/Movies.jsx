import React from "react";

import Movie from "./Movie";

class Movies extends React.Component {
	state = {
		items: [],
		isLoaded: false,
		error: null
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=7e3f1687&s=matrix')
			.then(result => result.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.Search
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						items: [{error}]
					})
				}
			);
	}

	render() {
		return (
			this.state.items.map(movie => (
				<Movie
					key={movie.imdbID} 
					id={movie.imdbID} 
					img={movie.Poster} 
					title={movie.Title} 
					type={movie.Type} 
					year={movie.Year}
				/>
			))
		);
	}
}

export default Movies;
