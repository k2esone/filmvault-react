import axios from "axios";
import { MovieModel } from "../model/MovieModel.";
import { UserProfilInformation } from "../model/UserProfileInformationModel";

export class GetUserProfil {
	static getProfil = async () =>
		await axios.get<UserProfilInformation>(
			`http://localhost:8080/api/users/userdata?username=${localStorage.getItem(
				"USER"
			)}`,
			{
				params: {},
				headers: {
					accept: "application/json",

					Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
				},
			}
		);
}
