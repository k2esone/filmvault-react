import { useCallback, useContext, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { debounce } from "lodash"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SerchContext } from "../context/CurentSearchContext";
import { Movie } from "../api/Movie";

const SerchBar = () => {
	const [searchOption, setSearchOption] = useState("");
	const [isAMovie, setIsaMovie] = useState(true);
	// const [suggestion, setSuggestions] = useState([]);

	const searchContext = useContext(SerchContext);

	const CurrentValueOfSearchBar = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchOption(event.target.value);
		console.log(searchOption)
	};
	const selectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (event.target.value === "TvSeries") {
			setIsaMovie(false);
		}
	};
	const searchMovieOrTvSeries = () => {
		console.log(searchOption,isAMovie);
		searchContext.setTitle(searchOption);
		searchContext.setType(isAMovie);
		setSearchOption('')
	};

// const loadSuggestions = useCallback(async(title:string)=>{
// if(isAMovie){
// 	const result = await Movie.getMovie(title);

// }

// },[])




	return (
		<>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Text input with dropdown button"
					onChange={CurrentValueOfSearchBar}
					value={searchOption}
					
				/>

				<Form.Select
					aria-label="Default select example"
					onChange={selectedType}>
					<option value="Movie">Movie</option>
					<option value="TvSeries">TvSeries</option>
				</Form.Select>
				<Button  onClick={searchMovieOrTvSeries}>Serach</Button>
			</InputGroup>
		</>
	);
};

export default SerchBar;
