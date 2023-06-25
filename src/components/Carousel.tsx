import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import MovieCard from "./MovieCard";
import { MovieModel } from "../model/MovieModel.";
import { TvSeries } from "../model/TvSeriesModel";
import { useEffect, useState } from "react";

interface Props {
	movies: MovieModel[];
	tvseries: TvSeries[];
	activ: boolean;
	
}

const Carousel = ({ movies, tvseries, activ }: Props) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		movies,
	};
	return (
		<div className="cards">
			<Slider {...settings}>


				{activ
					? movies.map((movie: MovieModel) => (
							<div
								key={movie.id}
								className="check px-1 mx-2 d-flex justify-content-center">
								<MovieCard
									title={movie.title}
									posterPath={movie.posterPath}
									overview={movie.overview}></MovieCard>
							</div>
					  ))
					: tvseries.map((series: TvSeries) => (
							<div
								key={series.id}
								className="check px-1 mx-2 d-flex justify-content-center">
								<MovieCard
									name={series.name}
									posterPath={series.posterPath}
									overview={series.overview}></MovieCard>
							</div>

					  ))}
			</Slider>
		</div>
	);
};
export default Carousel;
