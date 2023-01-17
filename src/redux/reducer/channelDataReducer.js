import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function  channelDataReducer(state=initialState.channelData,action){

    switch (action.type) {
        case actionTypes.GET_CHANNEL_DATA:
         
            return action.payload
        default:
            return state;
    }
}
