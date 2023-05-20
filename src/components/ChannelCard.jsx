import React from 'react'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { demoProfilePicture } from '../Utils/constant'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', width: { md: '320px', xs: '356px' }, height: '326px', margin: 'auto', marginTop: {marginTop} }} >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff'}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: '20px', marginLeft:'5px', color: 'gray'}}/>
          </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
              </Typography>
            )}
        </CardContent>

      </Link>
    </Box>
  )
}

export default ChannelCard;
