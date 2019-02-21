import { combineReducers } from "redux";
import Locations_reducer from "./Locations_reducer";
import Location_reducer from "./Location_reducer";

export default combineReducers({
    locations: Locations_reducer,
    location: Location_reducer
});