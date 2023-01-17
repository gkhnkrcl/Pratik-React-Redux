import * as actionTypes from "./actionTypes";


export function changeCategoryActions(category) {
 
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}