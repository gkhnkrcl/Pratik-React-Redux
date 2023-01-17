import React, { Component } from 'react'

import { Box } from "@mui/material";
import Videos from '../feed/Videos';
import ChannelCard from '../channelCard/ChannelCard';
import { connect } from "react-redux";
 import {bindActionCreators} from "redux"
 import * as feedAction from "../../redux/actions/feedAction"
 import * as channelVideoIdAction from "../../redux/actions/channelAndVideoIdAction"


 class ChannelDetail extends Component {
 
  componentDidMount() {
    
    const channelIds=this.props.items?.map((item)=>(item.snippet?.channelId))
    const channelid=channelIds?.find((i)=>(i===this.props.channelId))

    this.props.actions.getChannelData(`channels?part=snippet&id=${channelid}`)
    this.props.actions.getVideos(`search?channelId=${channelid}&part=snippet%2Cid&order=date`)
   
 }
  render() {
    
    return (
      <Box minHeight="95vh">
        <Box>
          <div style={{
            height:'300px',
            backgroundColor: 'red',
            zIndex: 10,
          }} />
         <ChannelCard channelCardDetail={this.props.channelData} marginTop="-93px" /> 
        </Box>
        <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos  videos={this.props.items} ></Videos>
        </Box>
      </Box>
    );
  }
}
function mapStateToProps(state) {
console.log(state)
 return {
   items: state.feedVideosReducer.items, 
   channelId: state.channelAndVideoIdReducer,
   channelData: state.channelDataReducer?.items?.[0] 
  
 };

}

function mapDispatchToProps(dispatch) {
 return {
   actions: {
     getVideos: bindActionCreators(
       feedAction.getVideos,dispatch
     ),
     getChannelAndVideoId: bindActionCreators(
      channelVideoIdAction.getChannelAndVideoIdActions,dispatch,
     
    ),
     getChannelData: bindActionCreators(
      feedAction.getChannelData,dispatch
     ),

}}}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail)