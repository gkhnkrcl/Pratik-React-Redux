import React, { Component } from 'react'
import { connect } from "react-redux";
import {bindActionCreators} from "redux"
import * as channelVideoIdAction from "../../redux/actions/channelAndVideoIdAction"
import * as feedAction from "../../redux/actions/feedAction"
import ReactPlayer from 'react-player/youtube'
import {Link} from "react-router-dom"
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "../feed/Videos"
import Loader from "../loader/Loader"


 class VideoDetail extends Component {
  componentDidMount(){

   const videoId=this.props.videoId
    this.props.actions.getVideoDetail(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}` )
    this.props.actions.getVideos(`search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`)

  }

  getChannelId(Id){
    this.props.actions.getChannelAndVideoId(Id)
}  

  render() {
    if(!this.props.relatedVideos) return <Loader />;
    return (
      <Box minHeight={"95vh"} >
        <Stack direction={{xs:'column', md:"row"}}>
          <Box flex={1}>
            <Box sx={{width:"100%", position:"sticky",top:'60px'}}>
            <ReactPlayer className={"react-player"} url= {`https://www.youtube.com/watch?v=${this.props.videoId}`}/>
            <Typography >
            { this.props.videoDetail?.snippet?.title }
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"black"}} py={1} px={2}>
             <Link to={`/channel/${this.props.videoDetail?.snippet?.channelId}`}  onClick={()=>this.getChannelId(this.props.videoDetail?.snippet?.channelId)} >
             <Typography  color="black" >
                  {this.props.videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
             </Link>
            <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(this.props.videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(this.props.videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
              </Stack>
            </Box>
          </Box>
          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={this.props.relatedVideos} direction="column" />
        </Box>
        </Stack>

      </Box>
    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    relatedVideos: state.feedVideosReducer.items,
    videoDetail: state.videoDetailReducer.items?.[0],
    videoId:state.channelAndVideoIdReducer,


  };

}

function mapDispatchToProps(dispatch) {

  return {
    actions: {
      getVideoDetail: bindActionCreators(
        feedAction.getVideoDetail,dispatch,

      ),
      getChannelAndVideoId: bindActionCreators(
        channelVideoIdAction.getChannelAndVideoIdActions,dispatch,

      ),
      getVideos: bindActionCreators(
        feedAction.getVideos,dispatch
      ),


}}}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail)


