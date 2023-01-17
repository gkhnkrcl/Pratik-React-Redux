import React from 'react'
import {Stack,Box}from "@mui/material"
 import  VideoCard from "../videoCard/VideoCard"
 import Loader from "../loader/Loader"



const Videos = ({videos, direction})=> {
  if(!videos?.length) return <Loader></Loader> 
  return (
    <Stack direction={ direction || "row" }  flexWrap="wrap" justifyContent="start" gap={2}  sx={{marginLeft:{sx:'0px', md:"55px"}}} >
      {videos?.map((item,idx)=>(
          <Box key={idx}>
             {item.id.videoId && <VideoCard video={item}/>}
          </Box>
      ))}

     </Stack>
  )
}

export default Videos