import { createContext, useState } from "react";

export type SearchOptions = {
	title: string;
	setTitle: (s: string) => void;
	type: boolean;
	setType: (b: boolean) => void;
};

export const SerchContext = createContext<SearchOptions>({
	title: "",
	setTitle: () => {},
	type: true,
	setType: () => {},
});
export const SearchOptionsProvider = (props: React.PropsWithChildren) => {
	const [title, setCurrentTitle] = useState("");
	const [type, setCurrentType] = useState(true);

	const setTitle = (name: string) => {
		setCurrentTitle(name);
	};
	const setType = (type: boolean) => {
		setCurrentType(type);
	};
	return (
		<SerchContext.Provider
			value={{
				title: title,
				setTitle: setTitle,
				type: type,
				setType: setType,
			}}>
			{props.children}
		</SerchContext.Provider>
	);
};
