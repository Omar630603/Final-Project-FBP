import React from 'react';
import "./MovieItem.css";
const MovieItem=(props) => {
	return (
		<div>
			<div className="movie-item-card">
				<div>
					<div className="movie-image">
						<img src={`${props.movie.cover}`} alt={`${props.movie.name}`} className="movie-item-image" />
					</div>
					<div className="movie-text">
						<h3>{props.movie.name}</h3>
						<p>{props.movie.released_date}</p>
						<p>{props.movie.rating}</p>
						<p>{props.movie.director}</p>
						<button className='button-add-wishlist' >Add To Whislist</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;