import React, { useState, useEffect } from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

  const searchMovies = (search, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
        search !== '' ? `${search}` : 'matrix'
      }${type !== 'all' ? `&type=${type}` : ``}`
    )
      .then((result) => result.json())
      .then((data) => {
				setMovies(data.Search);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
  }

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((result) => result.json())
      .then((data) => {
				setMovies(data.Search);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

  return (
		<main className='container content'>
			<Search searchMovies={searchMovies} />
			<h6>Results found: <span>{movies.length ? movies.length : 0}</span></h6>
			{loading ? <Preloader /> : <Movies movies={movies} />}
		</main>
	);
}

export default Main;
