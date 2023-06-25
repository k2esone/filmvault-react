import { createContext, useEffect, useState } from "react";

export type UserOptions = {
	isLogedIn: boolean;

	onLogout: () => void;
	onLogIn: (key: string, user:string) => void;
};

export const UserContext = createContext<UserOptions>({
	isLogedIn: false,

	onLogIn: () => {},

	onLogout: () => {},
});

export const UserContextProvider = (props: React.PropsWithChildren) => {
	const [isLogedIn, setIsLogedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
		if (storedUserLoggedInInformation === "1") {
			setIsLogedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("TOKEN");
		localStorage.removeItem("USER")
		setIsLogedIn(false);
	};

	const loginHandler = (t: string, u: string) => {
		localStorage.setItem("USER", u);
		localStorage.setItem("TOKEN", t);
		localStorage.setItem("isLoggedIn", "1");
		setIsLogedIn(true);
	};

	return (
		<UserContext.Provider
			value={{
				isLogedIn: isLogedIn,
				onLogout: logoutHandler,
				onLogIn: loginHandler,
			}}>
			{props.children}
		</UserContext.Provider>
	);
};
