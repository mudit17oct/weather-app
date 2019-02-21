import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';


export function fetchLocation(seachString) {
    const LocationsURL = `https://www.metaweather.com/api/location/${seachString}`;
    return function (dispatch) {
        axios.get(LocationsURL)
            .then((response) => {
                dispatch({ type: ActionTypes.FETCH_LOCATION_SUCCESS, payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: ActionTypes.FETCH_LOCATION_ERROR, payload: err });
            })
    }
}

export const fetchLocationBegin = () => ({
    type: ActionTypes.FETCH_LOCATION_BEGIN
});

export const fetchLocationSuccess = location => ({
    type: ActionTypes.FETCH_LOCATION_SUCCESS,
    payload: { location }
});

export const fetchLocationError = error => ({
    type: ActionTypes.FETCH_LOCATION_ERROR,
    payload: { error }
});



