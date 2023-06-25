import axios from "axios";
import { VodPlatforms } from "../model/VodPlatformsModel";

export class VodPlatformsApi {
	static getVod = async () =>
		await axios.get<VodPlatforms[]>("http://localhost:8080/api/providers", {
			params: {
                
			},
			headers: {
				accept: "application/json",
			
			},
		});
}
