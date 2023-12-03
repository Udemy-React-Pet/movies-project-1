import React from "react";

class Search extends React.Component {
	state = {
		search: ''
	};

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search);
		}
	}

	render() {
		return (
			<div className="row">
				<div className="input-field">
					<input
						className="validate"
						placeholder="Search"
						type="search"
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={(e) => this.handleKey(e)}
					/>
					<button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
					<div>
						<p>
							<label>
								<input 
									className="with-gap" 
									name="card-type" 
									type="radio" 
									value="Any" 
									checked 
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
