import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';


export function fetchLocations(seachString) {
    const LocationsURL = `https://www.metaweather.com/api/location/search/?query=${seachString}`;
    return function (dispatch) {
        axios.get(LocationsURL)
            .then((response) => {
                dispatch({ type: ActionTypes.FETCH_LOCATIONS_SUCCESS, payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: ActionTypes.FETCH_LOCATIONS_ERROR, payload: err });
            })
    }
}

export const fetchLocationsBegin = () => ({
    type: ActionTypes.FETCH_LOCATIONS_BEGIN
});

export const fetchLocationsSuccess = locations => ({
    type: ActionTypes.FETCH_LOCATIONS_SUCCESS,
    payload: { locations }
});

export const fetchLocationsError = error => ({
    type: ActionTypes.FETCH_LOCATIONS_ERROR,
    payload: { error }
});



