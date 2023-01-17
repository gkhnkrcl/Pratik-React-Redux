import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../feed/constant';

const ChannelCard = ({ channelCardDetail, marginTop }) => {

  return(
<Box
  
  sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto',
    marginTop,
  }}
>
  <Link to={`/channel/${channelCardDetail?.id}`}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'start', color: 'black' }}>
      <CardMedia
        image={ channelCardDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={ channelCardDetail?.snippet?.title}
        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
      />
      <Typography variant="h6">
        { channelCardDetail?.snippet?.title}
        <CheckCircleIcon sx={{ fontSize: '16px', color: 'gray', ml: '5px' }} />
      </Typography>
      { channelCardDetail?.statistics?.subscriberCount && (
        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
          {parseInt( channelCardDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
        </Typography>
      )}
    </CardContent>
  </Link>
</Box>
  )
}
 

export default ChannelCard;