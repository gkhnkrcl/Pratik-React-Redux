
import React, { Component } from 'react'
import { Box ,Stack,Typography,Paper} from "@mui/material"
import Videos from "../feed/Videos"
 import { connect } from "react-redux";
 import {bindActionCreators} from "redux"
 import * as feedAction from "../../redux/actions/feedAction"
 import { useParams } from "react-router-dom";

  
class SearchFeed extends Component{
  
 componentDidMount() {

  const { searchTerm} = this.props.params;
 this.props.actions.getVideos(`search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`)
  }
  render(){
    const { searchTerm} = this.props.params;
    return (
      <Paper elevation={4} sx={{mt:"10px"}}>
     <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box>
        <Typography sx={{fontSize:{sx:"15px", md:"40px"} ,fontFamily:'Varela Round, sans-serif',margin:"5px 15px", color:"black"}}>
        <span>{searchTerm}</span> için arama sonuçları:
        </Typography>
        <Videos videos={this.props.videos}></Videos>
      </Box>
     </Stack>
     </Paper>
    )
  }
}

function mapStateToProps(state) {

  return {
    videos: state.feedVideosReducer.items,
   
  
  };

}

function mapDispatchToProps(dispatch) {
 
  return {
    actions: {
      getVideos: bindActionCreators(
        feedAction.getVideos,dispatch,
       
      ),
   

}}}

export default connect(mapStateToProps, mapDispatchToProps)(props=>(<SearchFeed {...props} params={useParams()}/>))

