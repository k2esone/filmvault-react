import axios from "axios";

export class TestMovie {
	static getPopularMovies = async () =>
		await axios.get("https://api.themoviedb.org/3/movie/popular", {
			params: {
				language: "en-US",
				page: "1",
			},
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2YwMDhjZmNlZDE0ZTI5MzU3NTdmZGJjMDUyNzY4YiIsInN1YiI6IjY0NDNjZmE4ZDM1ZGVhMDRhZGZiYTY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODT_pTC6Oyiqoq-QYhri5TNeaHgUbnnmc2t2_BgxtCw",
			},
		});
}

