import axios, { AxiosResponse } from "axios";
import React, { useCallback, useContext, useState } from "react";




export default function useApi(
	
	applayDate: any
) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>("");


	const sendRequest = useCallback(async (requestMethod:any, requestParam?:string) => {
		setIsLoading(true);
		try {
			const result = await requestMethod(requestParam);
			applayDate(result.data);
		
		} catch (e) {
			if (axios.isAxiosError(e)) {
				setError(e.response?.data);
			}
		}
		setIsLoading(false);
	}, []);

	return {
		isLoading,
		error,
		sendRequest,
	};
}
