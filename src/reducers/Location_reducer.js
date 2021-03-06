import ActionTypes from '../constants/ActionTypes';

const initialState = {
   location: "",
   loading:false,
  error: null
}

export default function locationreducer(state = initialState, action){

    switch(action.type){
        case ActionTypes.FETCH_LOCATION_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case ActionTypes.FETCH_LOCATION_SUCCESS:{
            return {
                ...state,
                loading: false,
                location: action.payload
            };
        }
        case ActionTypes.FETCH_LOCATION_ERROR:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                
            }
        }
        default:
        // ALWAYS have a default case in a reducer
        return state;
    }
}