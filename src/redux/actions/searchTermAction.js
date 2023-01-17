import * as actionTypes from "./actionTypes";


export function changeSearchTerm(searchTerm) {

  return { type: actionTypes.SEARCH_TERM, payload: searchTerm};
}


