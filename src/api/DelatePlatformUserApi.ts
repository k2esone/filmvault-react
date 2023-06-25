import axios from "axios";
import {  } from "../model/MovieModel.";
import { UserProfilInformation } from "../model/UserProfileInformationModel";

export class DelatePlatformToUser {
	static RemovePlatform = async (ide:number) =>
		await axios.post<UserProfilInformation>(`http://localhost:8080/api/users/${localStorage.getItem("USER")}/platforms/remove`, null,  {
			params: {
				id:ide
				
			},
			headers: {
				accept: "application/json",
				Authorization:`Bearer ${localStorage.getItem("TOKEN")}`
  
			},
		});
}
