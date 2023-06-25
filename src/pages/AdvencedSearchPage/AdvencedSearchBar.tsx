import { useEffect, useState, useContext } from "react";
import SerchBar from "../../components/SearchBar";

import { SerchContext } from "../../context/CurentSearchContext";


const AdvencedSearchPage = () => {


	return (
		<>
			<div className="underline w-100"></div>
			<div className="py-5 d-flex flex-column justify-content-center align-items-center">
				<div className="col-md-8">
					<SerchBar></SerchBar>
				</div>
			
			</div>
		</>
	);
};
export default AdvencedSearchPage;
