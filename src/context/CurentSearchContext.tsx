import { createContext, useState } from "react";
import { VodPlatforms } from "../model/VodPlatformsModel";

export type SearchOptions = {
	title: string;
	setTitle: (s: string) => void;
	type: boolean;
	setType: (b: boolean) => void;
	gener: any;
	setGener: (s: any) => void;
	platform: VodPlatforms[];
	setPlatform: (s: VodPlatforms[]) => void;
	year: number | null;
	setYear: (s: number) => void;
};

export const SerchContext = createContext<SearchOptions>({
	title: "",
	setTitle: () => {},
	type: true,
	setType: () => {},
	gener: [],
	setGener: () => {},
	platform: [],
	setPlatform: () => {},
	year: null,
	setYear: () => {},
});
export const SearchOptionsProvider = (props: React.PropsWithChildren) => {
	const [title, setCurrentTitle] = useState("");
	const [type, setCurrentType] = useState(true);
	const [gener, setCurrentGener] = useState<any>([]);
	const [platform, setCurrenPlatforms] = useState<VodPlatforms[]>([]);
	const [year, setCurrentYear] = useState<number|null>(null);

	const setTitle = (name: string) => {
		setCurrentTitle(name);
	};
	const setType = (type: boolean) => {
		setCurrentType(type);
	};
	const setGener = (gen:any)=>{
		setCurrentGener(gen);
	}
	const setPlatform = (pla:VodPlatforms[]) =>{
		setCurrenPlatforms(pla);
	}
	const setYear = (ye:number|null) =>{
		setCurrentYear(ye);
	}
	

	return (
		<SerchContext.Provider
			value={{
				title: title,
				setTitle: setTitle,
				type: type,
				setType: setType,
				gener:gener,
				setGener:setGener,
				platform:platform,
				setPlatform:setPlatform,
				year:year,
				setYear:setYear,
			}}>
			{props.children}
		</SerchContext.Provider>
	);
};
