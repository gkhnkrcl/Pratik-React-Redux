import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function feedVideosReducer(state=initialState.feedVideos,action){

    switch (action.type) {
        case actionTypes.GET_FEED_VİDEOS:
            return action.payload
        default:
            return state;
    }
}
