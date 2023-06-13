import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../../components/Carousel";
import "./Home.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { TestMovie } from "../../api/TestMovie";
import { SerchContext } from "../../context/CurentSearchContext";
import { Movie } from "../../api/Movie";
import { TvSeries } from "../../api/TvSeries";
import { MovieModel } from "../../model/MovieModel.";

const TopMovies = () => {
	const [popularMovies, setPopularMovies] = useState<MovieModel[]>([]);
	const searchContext = useContext(SerchContext);
	const { title, type } = searchContext;

	const getMovies = async () => {
		const result = await TestMovie.getPopularMovies();

		setPopularMovies(result.data);
		console.log(result.data);
	};

	const findMovieorSeries = async () => {
		if (searchContext.title.length > 3) {
			if (!searchContext.type) {
				const result = await TvSeries.getSeries(searchContext.title);
				setPopularMovies(result.data.results);
				console.log(searchContext.type);
				console.log(result);
				return;
			}
			const result = await Movie.getMovie(searchContext.title);
			setPopularMovies(result.data.results);
			console.log(result);
			console.log(searchContext.title.length);
		}
	};

	useEffect(() => {
		findMovieorSeries();
	}, [title, type]);

	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div className="py-5">
			<h2 className="d-flex justify-content-center">
				{searchContext.title === "" ? "POPOULAR" : searchContext.title}
			</h2>
			<div className="underline-home"></div>
			<div className="container d-flex justify-content-around">
				<Carousel movies={popularMovies}></Carousel>
			</div>
		</div>
	);
};
export default TopMovies;
