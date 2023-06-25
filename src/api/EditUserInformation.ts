import axios from "axios";
import {  } from "../model/MovieModel.";
import { UserProfilInformation } from "../model/UserProfileInformationModel";

export class EditUserProfil {
	static Profil = async (data:UserProfilInformation) =>
		await axios.patch<UserProfilInformation>(`http://localhost:8080/api/users/update?username=${localStorage.getItem("USER")}`, data, {
			params: {
				
				
			},
			headers: {
				accept: "application/json",
				Authorization:`Bearer ${localStorage.getItem("TOKEN")}`
  
			},
		});
}
