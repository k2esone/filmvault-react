import axios from "axios";

import { TvSeries } from "../model/TvSeriesModel";

export class TvSeriesApi {
	static getSeries = async (title: string) =>
		await axios.get<TvSeries[]>("http://localhost:8080/api/tvseries/search", {
			params: {
				query: title,
				
			},
			headers: {
				accept: "application/json",
			
  
			},
		});
}
