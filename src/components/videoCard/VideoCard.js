import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Typography , Card ,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from "@mui/icons-material"
import { connect } from "react-redux";
 import {bindActionCreators} from "redux"
 import * as channelVideoIdAction from "../../redux/actions/channelAndVideoIdAction"

class VideoCard extends Component {
  getChannelId(Id){
        this.props.actions.getChannelAndVideoId(Id)
  }  
  render() {
  
    return (
      <Card sx={{width:{ xs:'100%', sm:'358px',md:'320px'}}}>
        <Link to={`/video/${this.props.video.id.videoId}`}  onClick={()=>this.getChannelId(this.props.video.id.videoId)}>
        <CardMedia image={this.props.video.snippet?.thumbnails?.medium?.url}
        sx={{width:{xs:'100%', sm:'358px',md:'320px'}, height:180}}
        ></CardMedia>
        </Link>
        <CardContent sx={{backgroundColor:"#1e1e1e",height:"106px"}}>
        <Link to={`/video/${this.props.video.id.videoId}`}  onClick={()=>this.getChannelId(this.props.video.id.videoId)}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
                {this.props.video.snippet?.title.slice(0,60)}
            </Typography>
        </Link>
          <Link to={`/channel/${this.props.video.snippet?.channelId}`} onClick={()=>this.getChannelId(this.props.video.snippet?.channelId)}>
            <Typography variant="subtitle2" fontWeight="bold" color="#FFF" >
                {this.props.video.snippet?.channelTitle.slice(0,60)}
                <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}></CheckCircle>
            </Typography>
        </Link>
        </CardContent>
    </Card>
    )
  }
}



function mapStateToProps(state) {
  return {
    channelAndVideoId:state.channelAndVideoIdReducer,
  };

}

function mapDispatchToProps(dispatch) {
 
  return {
    actions: {
      getChannelAndVideoId: bindActionCreators(
        channelVideoIdAction.getChannelAndVideoIdActions,dispatch,
       
      ),
   
   

}}}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard)
