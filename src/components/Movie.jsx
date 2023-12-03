import React from "react";

function Movie(props) {
	const { id, img, title, type, year } = props;

	return (
		<>
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-image">
							<img src={img}/>
						</div>
						<div className="card-content">
							<div className="card-title">{title}</div>
							<span>{type}</span>
							<span className="right">{year}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Movie;
