import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../../components/Carousel";
import "./Home.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { TestMovie } from "../../api/PopularMovies";
import { SerchContext } from "../../context/CurentSearchContext";
import { Movie } from "../../api/Movie";
import { MovieModel } from "../../model/MovieModel.";
import useApi from "../../hooks/useApi";
import { TvSeries } from "../../model/TvSeriesModel";
import { PopularTvSeries } from "../../api/PopularTvSeries";
import { data } from "jquery";
import { TvSeriesApi } from "../../api/TvSeriesApi";

const TopMovies = () => {
	const [popularMovies, setPopularMovies] = useState<MovieModel[]>([]);
	const [popoularTvSeries, setPopularTvseries] = useState<TvSeries[]>([]);
	const [searchResoult, setSearchResoult] = useState<MovieModel[] | TvSeries[]>(
		[]
	);
	const searchContext = useContext(SerchContext);
	const { title, type } = searchContext;
	const [loading, setloading] = useState(false);
	const [toggleContent, setToggleContent] = useState<boolean>(true);

	const findMovieorSeries = useCallback(async () => {
	
		if (searchContext.title.length > 3) {
			if (!searchContext.type) {
				setloading(true);

				await searchRequestTvSeries(TvSeriesApi.getSeries, searchContext.title);
				setToggleContent(false);
				console.log(popoularTvSeries);

				setloading(false);
			} else {
				setloading(true);

				setToggleContent(true);
				await searchRequestMovie(Movie.getMovie, searchContext.title);
				setloading(false);
			}
		}
	}, [title, type]);

	const dataToMovie = useCallback(
		(data: any) => {
			setPopularMovies(data);
		},
		[title]
	);
	const dataToTvSeries = useCallback(
		(data: any) => {
			setPopularTvseries(data);
		},
		[type]
	);

	const { sendRequest: searchRequestMovie } = useApi(dataToMovie);
	const { sendRequest: searchRequestTvSeries } = useApi(dataToTvSeries);

	const { isLoading, error, sendRequest: fetchMovies } = useApi(dataToMovie);
	const {
		isLoading: SeriesLoading,
		error: seriesError,
		sendRequest: fetchTvSeries,
	} = useApi(dataToTvSeries);

	useEffect(() => {
		findMovieorSeries();
	}, [title, type]);

	useEffect(() => {
		// console.log(popularMovies)

		fetchTvSeries(PopularTvSeries.getSeries);
		fetchMovies(TestMovie.getPopularMovies);
	}, [fetchMovies]);

	return (
		<div className="py-5">
			<h2 className="d-flex justify-content-center">
				{searchContext.title === ""
					? toggleContent
						? "Popular Movies"
						: "Popular TvSeries"
					: searchContext.title}
			</h2>

			<button
				type="button"
				className="btn-primary"
				onClick={() => setToggleContent(!toggleContent)}>
				{toggleContent ? "TvSeries" : "Movies"}
			</button>

			<br></br>
			<div className="underline-home"></div>
			<div className="container d-flex justify-content-around">
				{!loading && (
					<Carousel
						activ={toggleContent}
						movies={popularMovies}
						tvseries={popoularTvSeries}></Carousel>
				)}

				{(!isLoading || !SeriesLoading) &&
					popularMovies.length === 0 &&
					!loading && <p>Found no movies</p>}
				{(!isLoading || !SeriesLoading) && (error || seriesError) && (
					<p>{error || seriesError}</p>
				)}
				{isLoading && <p>Loading...</p>}
				{loading && <>Loading...</>}
			</div>
		</div>
	);
};
export default TopMovies;
