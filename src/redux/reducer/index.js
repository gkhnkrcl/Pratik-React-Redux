import {combineReducers} from "redux"
import feedVideosReducer from "./feedVideosReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import channelAndVideoIdReducer from "./channelAndVideoIdReducer";
import  channelDataReducer  from "./channelDataReducer"
import  searchTermReducer from "./searchTermReducer"
import  videoDetailReducer from "./videoDetailReducer"





const rootReducer = combineReducers({
    feedVideosReducer,
    changeCategoryReducer,
    channelAndVideoIdReducer ,
    channelDataReducer,
    searchTermReducer,
    videoDetailReducer,
    

})

export default rootReducer;