import axios from "axios";
// import { request } from "http";
import { UserLogInModel } from "../model/UserLogInModel";

import { RegisterModel } from "../model/RegisterModel";

export class RegisterApi {
	static signIn = async (request: RegisterModel) =>
		await axios.post("http://localhost:8080/api/auth/register", request,{


		headers: {
			accept: "application/json",
			Authorization:`Niedzwiedz ${localStorage.getItem("TOKEN")}`
		},
		
		});
}
