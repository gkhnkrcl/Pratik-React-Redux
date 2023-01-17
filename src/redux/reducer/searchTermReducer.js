import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function searchTermReducer(state=initialState.searchTerm,action){

    switch (action.type) {
        case actionTypes.SEARCH_TERM:
            return action.payload
        default:
            return state;
    }
}
