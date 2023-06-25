import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import apple from "../../img/platforms/apple.jpg";
import netflix from "../../img/platforms/netflix1.jpg";
import hbo from "../../img/platforms/hbop.jpg";
import disney from "../../img/platforms/disney1.jpg";
import amazon from "../../img/platforms/prime.jpg";
import { VodPlatformsApi } from "../../api/PaltformsApi";
import { VodPlatforms } from "../../model/VodPlatformsModel";
import { useCallback, useContext, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { SerchContext } from "../../context/CurentSearchContext";

const SupportedPlatforms = () => {
	const [platforms, setPlatforms] = useState<VodPlatforms[]>([]);
	const searchContext = useContext(SerchContext)

	const getData = useCallback((data: any) => {
		setPlatforms(data);
	}, []);



	const getPlatforms = useCallback(async () => {
		const result = await VodPlatformsApi.getVod();
		console.log(result.data)
		searchContext.setPlatform(result.data);
		setPlatforms(result.data);
	},[platforms]);

	useEffect(() => {
		getPlatforms();
		searchContext.setPlatform(platforms)
		console.log(searchContext.platform)
	
	}, []);

	return (
		<div className="py-5 platofrms">
			<h2 className="display-4 text-light">Supported Platforms</h2>
			<div className="underline-home"></div>

			<div className="col-12 platform-list justify-content-between py-5">
				{platforms.map((vod) => (
					<img
						key={vod.name}
						src={`https://image.tmdb.org/t/p/w500/${vod.logoPath}`}
						alt="Admin"
						className="rounded-circle"
						width="150"
					/>
				))}
			</div>
		</div>
	);
};
export default SupportedPlatforms;
