import ActionTypes from '../constants/ActionTypes';

const initialState = {
   locations: [],
   loading:false,
  error: null
}

export default function locationsreducer(state = initialState, action){

    switch(action.type){
        case ActionTypes.FETCH_LOCATIONS_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case ActionTypes.FETCH_LOCATIONS_SUCCESS:{
            return {
                ...state,
                loading: false,
                locations: action.payload
            };
        }
        case ActionTypes.FETCH_LOCATIONS_ERROR:{
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