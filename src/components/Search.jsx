import React from "react";

class Search extends React.Component {
	state = {
		search: ''
	};

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
						onKeyDown={(e) => {if (e.key === 'Enter') this.props.handleSearch(this.state.search)}}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
