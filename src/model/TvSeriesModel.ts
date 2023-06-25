import { Region } from "./RegionModel"
import { VodPlatforms } from "./VodPlatformsModel"

export type TvSeries = {
    id:number,
    name:string,
    overview:string,
    adult:boolean,
    episodes:number,
    popularity:number,
    region:Region,
    vodPlatforms:VodPlatforms[],
    posterPath:string,
    orginal_language:string,
    firstAirDate:string,
    number_of_seasons:number
}