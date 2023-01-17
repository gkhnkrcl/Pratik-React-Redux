import * as actionTypes from "./actionTypes";


export function getFeedVideos(videos) {
  return { type: actionTypes.GET_FEED_VİDEOS, payload: videos };
}


export function getChannelDetail(channelData) {
  return { type: actionTypes.GET_CHANNEL_DATA, payload: channelData};
}


export function videoDetailAction(videoDetail) {

  return { type: actionTypes.VİDEO_DETAİL, payload: videoDetail };
}

const options = {

	headers: {
    'X-RapidAPI-Key': '6ab7b20e6fmsh55e7d8d2bc9abf6p1a0470jsn593819b7a3f2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export function getVideos(url) {
     
 let BASE_URL="https://youtube-v31.p.rapidapi.com"
 return function(dispatch) {
 return fetch(`${BASE_URL}/${url}`,options)
        .then(response => response.json())
        .then(response => dispatch(getFeedVideos(response)))  
    }} 
   

export function getChannelData(url) {
    
let BASE_URL="https://youtube-v31.p.rapidapi.com"
return function(dispatch) {
return fetch(`${BASE_URL}/${url}`,options)
        .then(response => response.json())
        .then(response => dispatch(getChannelDetail(response)))  
    }}

export function getVideoDetail(url) {
    
let BASE_URL="https://youtube-v31.p.rapidapi.com"
return function(dispatch) {
return fetch(`${BASE_URL}/${url}`,options)
      .then(response => response.json())
      .then(response => dispatch(videoDetailAction(response)))  
    }}