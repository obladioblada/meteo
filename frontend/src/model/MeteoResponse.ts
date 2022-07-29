import {MeteoItem} from "./MeteoItem";
import {CityItem} from "./CityItem";

export interface MeteoResponse {
   city: CityItem;
   list: MeteoItem[],
   error: String
}
