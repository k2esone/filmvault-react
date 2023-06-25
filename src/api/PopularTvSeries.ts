import axios from "axios";
//to nie jest endpoint dobry 

export class PopularTvSeries {
	static getSeries = async () =>
		await axios.get("http://localhost:8080/api/tvseries/popular", {
			params: {
               
			},
			headers: {
				accept: "application/json",
				
			},
		});
}
