import { ListGroup, Pagination } from "react-bootstrap";
import UserMovieCard from "../../components/UserMovieCard";
import { TvSeries } from "../../model/TvSeriesModel";
import { useCallback, useEffect, useState } from "react";
import UserTvSeriesCard from "../../components/UserTvSeriesCard";
import { GetUserProfil } from "../../api/GetUserProfil";

const UserTvSeries = () => {
	const [tvSeries, setTvSeries] = useState<TvSeries[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [tvseriesperPage, setTvseriesPerPage] = useState(8);

	const getSeries = useCallback(async () => {
		const result = await GetUserProfil.getProfil();
		setTvSeries(result.data.tvSeries);
	}, []);

	useEffect(() => {
		getSeries();
	}, [getSeries]);

	//Api call to for movies
	const delateTvSeriesFromUser = (id: number) => {
		console.log(id);
	};

	const indexOfLAstSeries = currentPage * tvseriesperPage;
	const indexOfFirstSeries = indexOfLAstSeries - tvseriesperPage;
	const currentTvSeries = tvSeries?.slice(
		indexOfFirstSeries,
		indexOfLAstSeries
	);

	const changePage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<div className="conteiner-fluid min-vh-100">
				<div className="underline"></div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					{tvSeries.length === 0 && (
						<p className="text-algin-center">Tv series not Found</p>
					)}

					{tvSeries.length > 0 &&
						currentTvSeries.map((series) => (
							<div key={series.name} className="col">
								<UserTvSeriesCard {...series}></UserTvSeriesCard>
							</div>
						))}
				</div>
				{/* <Pagination
					curentPage={changePage}
					totalItems={tvSeries.length}
					itemsPerPAge={tvseriesperPage}></Pagination> */}
			</div>
		</>
	);
};
export default UserTvSeries;
