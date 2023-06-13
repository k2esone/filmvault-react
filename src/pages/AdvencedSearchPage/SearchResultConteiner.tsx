import { useContext, useEffect, useState } from "react";
import "./SearchPage.css";
import { SerchContext } from "../../context/CurentSearchContext";
import { TvSeries } from "../../api/TvSeries";
import { Movie } from "../../api/Movie";
import context from "react-bootstrap/esm/AccordionContext";
import { TestMovie } from "../../api/TestMovie";
import { MovieModel } from "../../model/MovieModel.";

const SearchResultConteiner = () => {
	const [resultOfSearch, setResoultOfSearch] = useState<MovieModel[]|null>([]);
	const searchContext = useContext(SerchContext);
	const platforms = searchContext;
	const [activ, isActive] = useState(false);

	const getMovies = async () => {
		const result = await TestMovie.getPopularMovies().then();
		setResoultOfSearch(result.data);
		console.log(result.data);
	};

	const advancedSearch = async () => {
		if (searchContext.title.length > 3) {
			if (!searchContext.type) {
				const result = await TvSeries.getSeries(searchContext.title);
				setResoultOfSearch(result.data.results);
				const chosenPlatforms = searchContext.platform
					.filter((a) => a.checked)
					.flatMap((b) => b.name);
				const chosenGeners = searchContext.gener
					.filter((a: { checked: any }) => a.checked)
					.flatMap((b: { name: any }) => b.name);
				console.log(searchContext.year);
				console.log(chosenPlatforms);
				console.log(chosenGeners);
				console.log(resultOfSearch);
				searchContext.setTitle("");
				// if(chosenPlatforms.length>1){
				// 	//api call
				// }

				return;
			}
			const result = await Movie.getMovie(searchContext.title);
			setResoultOfSearch(result.data.results);
			const chosenPlatforms = searchContext.platform
				.filter((a) => a.checked)
				.flatMap((b) => b.name);
			const chosenGeners = searchContext.gener
				.filter((a: { checked: any }) => a.checked)
				.flatMap((b: { name: any }) => b.name);
			console.log(chosenPlatforms);
			console.log(chosenGeners);
			console.log(searchContext.year);
			console.log(resultOfSearch);
		}
	};

	useEffect(() => {
		advancedSearch();
	}, [platforms]);
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className="conteiner now py-5 overflow-auto d-flex justify-content-center ">
			<div className="title">
				<h1>Title</h1>
				<div className="dropdown filter">
					<button
						onClick={() => isActive(!activ)}
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Filters
					</button>
					<div
						className={activ ? "dropdown-menu show" : "dropdown-menu"}
						aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" >
							Popularity
						</a>
						<a className="dropdown-item" href="#">
							Date
						</a>
						<a className="dropdown-item" href="#">
							Rating
						</a>
					</div>
				</div>
			</div>
			<div className="row  justify-content-around">
				{/* {resultOfSearch.map((movie: any) => (<div
					className="card card-high col-3 col-md-4 mx-3 mb-3"
					style={{ width: "18rem" }}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{movie.title}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<div className="d-flex dlex-row justify-content-around">
							<a href="#" className="btn btn-primary">
								i will see
							</a>
							<a href="#" className="btn btn-primary">
								watched
							</a>
						</div>
					</div>
				</div>))} */}
				{resultOfSearch!.map((movie: any) => (
					<div className="card card-high" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{movie.title}</h5>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Gener:</li>
							<li className="list-group-item">Provaider</li>
							<li className="list-group-item">Date</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								Watched
							</a>
							<a href="#" className="card-link">
								ToWatch
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default SearchResultConteiner;
