import axios from "axios";
import { MovieModel } from "../model/MovieModel.";
import { UserProfilInformation } from "../model/UserProfileInformationModel";

export class AddTvSeriesToProfile {
	static addTvSeries = async (id:number) =>
	await axios.post<UserProfilInformation>(`http://localhost:8080/api/users/${localStorage.getItem("USER")}/add/tvseries`, null, {

			params: {
			tvseriesid: id
				
			},
			headers: {
				accept: "application/json",
				Authorization:`Bearer ${localStorage.getItem("TOKEN")}`
			
  
			},
		});
}
