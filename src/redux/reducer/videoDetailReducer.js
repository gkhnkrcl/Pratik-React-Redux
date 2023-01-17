import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function videoDetailReducer(state=initialState.videoDetail,action){

    switch (action.type) {
        case actionTypes.VİDEO_DETAİL:    
            return action.payload  
        default:  
            return state;
    }
}
