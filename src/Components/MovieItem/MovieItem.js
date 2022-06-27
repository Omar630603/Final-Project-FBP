import React from 'react';
import "./MovieItem.css";
import {Route,Routes, Link} from "react-router-dom";
import DetailPage from '../../Pages/DetailPage';
import {useState} from "react";
import DetailMovie from '../DetailMovie/DetailMovie';

const MovieItem=(props) => {
	return (
			<div className='movies'>
				<div className="movie-container">
					<div className="movie-image">
						<img src={`${props.movie.cover}`} alt={`${props.movie.name}`} className="movie-item-image" />
					</div>
					<div className="movie-info">
						<h3>{props.movie.name}</h3>
						<p>{props.movie.released_date}</p>
						<p>{props.movie.rating}</p>
						<p>{props.movie.director}</p>

						<Link to = {`/detail/${props.movie.id}`}><button className='button-add-wishlist-sm'>Show Detail</button></Link>
					</div>
				</div>
			</div>
	);
};
export default MovieItem;