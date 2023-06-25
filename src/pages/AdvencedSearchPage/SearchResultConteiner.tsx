import { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import "./SearchPage.css";
import { SerchContext } from "../../context/CurentSearchContext";

import { Movie } from "../../api/Movie";
import context from "react-bootstrap/esm/AccordionContext";
import { TestMovie } from "../../api/PopularMovies";
import { MovieModel } from "../../model/MovieModel.";
import { data } from "jquery";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useFirstRender } from "../../hooks/useFirstRender";
import { platformsAvailable } from "../../constans/constans";
import { TvSeries } from "../../model/TvSeriesModel";
import { TvSeriesApi } from "../../api/TvSeriesApi";
import { AddMovieToProfile } from "../../api/AddMovieToProfile";
import { AddTvSeriesToProfile } from "../../api/AddTvSeriesToUser";
import { toast } from "react-toastify";

const SearchResultConteiner = () => {
	const firstRender = useFirstRender();
	const [resultOfSearch, setResoultOfSearch] = useState<MovieModel[]>([]);
	const [resultOfSearchTv, setResoultOfSearchTv] = useState<TvSeries[]>([]);
	const searchContext = useContext(SerchContext);
	const [activSort, setSortActive] = useState(false);
	const [activFilter, setFilterActive] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage, setMoviesPerPage] = useState(8);
	const [loading, setloading] = useState(false);

	const indexOFLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOFLastMovie - moviesPerPage;
	const currentMovies = resultOfSearch.slice(
		indexOfFirstMovie,
		indexOFLastMovie
	);

	const currentTvSeries = resultOfSearchTv.slice(
		indexOfFirstMovie,
		indexOFLastMovie
	);

	const searchData = (data: any) => {
		setResoultOfSearchTv(data);
	};

	const { isLoading, sendRequest } = useApi(searchData);

	const searchResultForMovie = useCallback(async () => {
		if (searchContext.title.length > 3) {
			setloading(true);
			if (searchContext.type) {
				setloading(true);

				const result = await Movie.getMovie(searchContext.title);
				console.log(result);
				console.log(searchContext.platform);
				setResoultOfSearch(result.data);
				setloading(false);

				searchContext.setTitle("");
			}
			if (!searchContext.type) {
				setloading(isLoading);

				setloading(true);

				await sendRequest(TvSeriesApi.getSeries, searchContext.title);
				setloading(false);

				searchContext.setTitle("");
			}
		}
	}, [searchContext.title, searchContext.type]);

	const dataSort = useCallback(() => {
		resultOfSearchTv?.sort(
			(a: TvSeries, b: TvSeries) =>
				Number(new Date(a.firstAirDate)) - Number(new Date(b.firstAirDate))
		);

		resultOfSearch?.sort(
			(a: MovieModel, b: MovieModel) =>
				Number(new Date(a.releaseDate)) - Number(new Date(b.releaseDate))
		);

		setSortActive(false);
	}, [resultOfSearch, searchContext.type]);
	const popularitySort = useCallback(() => {
		resultOfSearchTv?.sort(
			(a: TvSeries, b: TvSeries) => a.popularity - b.popularity
		);

		resultOfSearch?.sort(
			(a: MovieModel, b: MovieModel) => a.popularity - b.popularity
		);

		setSortActive(false);
	}, [resultOfSearch, searchContext.type]);

	const provaidersSort = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement> | any) => {
			if (!searchContext.type) {
			}
			setResoultOfSearchTv(
				resultOfSearchTv?.filter((series) =>
					series.vodPlatforms.map((vod) => vod.id).includes(+event.target.id)
				)
			);
			setResoultOfSearch(
				resultOfSearch?.filter((movie) =>
					movie.vodPlatforms.map((vod) => vod.id).includes(+event.target.id)
				)
			);
		},
		[resultOfSearch]
	);

	useEffect(() => {
		if (!firstRender) {
			searchResultForMovie();
		}
	}, [searchContext.title]);

	const changePage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const addToProfile = async (id: number) => {
		if (!searchContext.type) {
			const result = await AddTvSeriesToProfile.addTvSeries(id);
			console.log("addig series");
		}

		await AddMovieToProfile.addMovie(id);
		console.log(id);
		toast.success(`Added to profile`, {
			position: "top-center",
			autoClose: 500,
			theme: "light",
		});
	};

	return (
		<div className="conteiner now py-5 overflow-auto d-flex justify-content-center ">
			<div className="title">
				<div className="d-flex justify-content-between">
					<div className="dropdown platform">
						<button
							onClick={() => setSortActive(!activSort)}
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Platforms
						</button>
						<div
							onClick={provaidersSort}
							className={activSort ? "dropdown-menu show" : "dropdown-menu"}
							aria-labelledby="dropdownMenuButton">
							{platformsAvailable.map((platform) => (
								<option
									className="dropdown-item"
									id={platform.id}
									value="Rating">
									{platform.name}
								</option>
							))}
						</div>
					</div>
					<div className="dropdown filter">
						<button
							onClick={() => setFilterActive(!activFilter)}
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Sort
						</button>
						<div
							className={activFilter ? "dropdown-menu show" : "dropdown-menu"}
							aria-labelledby="dropdownMenuButton">
							<option
								onClick={()=>popularitySort()}
								className="dropdown-item"
								value="">
								Popularity
							</option>
							<option
								onClick={() => dataSort()}
								className="dropdown-item"
								value="Date">
								Date
							</option>
						</div>
					</div>
				</div>
			</div>
			<div className="row  justify-content-around">
				{!loading &&
					!searchContext.type &&
					currentTvSeries!.map((series: TvSeries) => (
						<div
							key={series.name}
							className="card card-high"
							style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src={`https://image.tmdb.org/t/p/w500/${series.posterPath}`}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{series.name}</h5>
								<p>Popularity: {Math.round(series.popularity)}</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									Episods: {series.episodes || "Robin"}
								</li>
								<li className="list-group-item">
									{series.vodPlatforms.map((vod) => (
										<img
											key={vod.name}
											src={`https://image.tmdb.org/t/p/w500/${vod.logoPath}`}
											alt="Admin"
											className="rounded-circle"
											width="40"
										/>
									))}
								</li>
								<li className="list-group-item">
									Release Date: {series.firstAirDate}
								</li>
							</ul>
							<div className="card-body">
								<Link
									onClick={() => addToProfile(series.id)}
									className="card-link"
									to={""}>
									Add to Profile
								</Link>
							</div>
						</div>
					))}

				{!loading &&
					searchContext.type &&
					currentMovies!.map((movie: MovieModel) => (
						<div
							key={movie.title}
							className="card card-high"
							style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{movie.title}</h5>
								<h4 className="card-title">Popularity :{Math.round(movie.popularity)}</h4>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									Gener: {movie.genres?.map((gener) => gener.name + " ")}
								</li>
								<li className="list-group-item">
									{movie.vodPlatforms.map((vod) => (
										<img
											key={vod.name}
											src={`https://image.tmdb.org/t/p/w500/${vod.logoPath}`}
											alt="Admin"
											className="rounded-circle"
											width="40"
										/>
									))}
								</li>
								<li className="list-group-item">
									Release Date: {movie.releaseDate}
								</li>
							</ul>
							<div className="card-body">
								<Link
									onClick={() => addToProfile(movie.id)}
									className="card-link"
									to={""}>
									Add to Profile
								</Link>
							</div>
						</div>
					))}
				{(loading && (
					<p className="d-flex justify-content-center align-items-center text-warning h2">
						LOADING..
					</p>
				)) ||
					(resultOfSearch.length <= 0 && resultOfSearchTv.length <= 0 && (
						<p className="d-flex justify-content-center align-items-center text-warning h2">
							Enter title/No Movies Found
						</p>
					))}
				{!isLoading && (
					<Pagination
						itemsPerPage={moviesPerPage}
						totalItems={resultOfSearch.length}
						curentPage={changePage}></Pagination>
				)}
			</div>
		</div>
	);
};
export default SearchResultConteiner;
