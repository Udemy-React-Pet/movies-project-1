import React from "react";

class Search extends React.Component {
	state = {
		search: '',
		type: this.props.type
	};

	handleKey = (event) => {
		const { search, type } = this.state;

		if (event.key === 'Enter') {
			this.props.searchMovies(search, type);
		}
	}

	render() {
		const { search, type } = this.state;

		return (
			<div className="row">
				<div className="input-field">
					<input
						className="validate"
						placeholder="Search"
						type="search"
						value={search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={(e) => this.handleKey(e)}
					/>
					<button className="btn search-btn" onClick={() => this.props.searchMovies(search)}>Search</button>
					<div>
						<p>
							<label>
								<input 
									className="with-gap" 
									name="card-type" 
									type="radio" 
									value="Any" 
									checked={type === ''}
									onChange={(e) => this.props.handleTypeChange(e)}
								/>
								<span>Any</span>
							</label>
						</p>
						<p>
							<label>
								<input 
									className="with-gap" 
									name="card-type" 
									type="radio" 
									value="movie"
									checked={type === 'movie'} 
									onChange={(e) => this.props.handleTypeChange(e)} 
								/>
								<span>Movies only</span>
							</label>
						</p>
						<p>
							<label>
								<input 
									className="with-gap" 
									name="card-type" 
									type="radio" 
									value="series" 
									checked={type === 'series'}
									onChange={(e) => this.props.handleTypeChange(e)} 
								/>
								<span>Series only</span>
							</label>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
