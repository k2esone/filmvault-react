import { Genres } from "./GenerModel";
import { Region } from "./RegionModel";
import { VodPlatforms } from "./VodPlatformsModel";

export type MovieModel = {
	id: number;
	title: string;
	genres: Genres[]
	overview: string;
	runtime: string;
	credits: string;
	popularity:number,
	ratting: number;
	apiID: number;
	vodPlatforms: VodPlatforms[];
	region: Region;
	posterPath: string;
	releaseDate: string;
};
