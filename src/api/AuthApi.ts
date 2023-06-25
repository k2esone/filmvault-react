import axios from "axios";
// import { request } from "http";
import { UserLogInModel } from "../model/UserLogInModel";

import { useContext } from "react";
import { UserContextProvider } from "../context/UserContext";

export class AuthApi {


	static signIn = async (request: UserLogInModel) =>
		await axios.post("http://localhost:8080/api/auth/login", request,{
			headers: {
				accept: "application/json",
			
			},
		});
}
