import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function channelAndVideoIdReducer(state=initialState.channelAndVideoId,action){

    switch (action.type) {
        case actionTypes.CHANNEL_VİDEO_ID:
         
            return action.payload
        default:
            return state;
    }
}
