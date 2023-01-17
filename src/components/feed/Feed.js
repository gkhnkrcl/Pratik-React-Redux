
import React, { Component } from 'react'
import { Box ,Stack,Typography,Paper} from "@mui/material"
import SideBar from "./SideBar"
import Videos from "./Videos"
 import { connect } from "react-redux";
 import {bindActionCreators} from "redux"
 import * as feedAction from "../../redux/actions/feedAction"

class Feed extends Component{
 componentDidMount() {
 this.props.actions.getVideos(`search?q=${this.props.changeName.name}&part=snippet%2Cid&maxResults=50&order=date`)
  }
  render(){
    return (
      <Paper elevation={4} sx={{mt:"10px"}}>
     <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto', md:"92vh"} , borderRight:"1px solid black" ,px:{sx:0,md:2}} }>
    <SideBar></SideBar>
  <Typography variant="body2" sx={{mt:1.5, color:"#fff"}}>Copyright 2023 GKHNKRCL</Typography>
      </Box>
      <Box>
        <Typography sx={{fontSize:{sx:"15px", md:"40px"} ,fontFamily:'Varela Round, sans-serif',margin:"5px 15px"}}>
          <span>{this.props.changeName.name || "Tümü"}</span>
          <span></span>
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
    changeName:state.changeCategoryReducer
  
  };

}

function mapDispatchToProps(dispatch) {
 
  return {
    actions: {
      getVideos: bindActionCreators(
        feedAction.getVideos,dispatch,
       
      ),
   

}}}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)

