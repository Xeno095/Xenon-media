import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './index'
import { fetchFromApi } from '../Utils/fetchFromApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory]=useState('New');
  const [videos, setVideos]= useState([]);
  const [channelId, setChannelId]= useState([])

useEffect(()=>{
  fetchFromApi(`search?part=snippet,id&q=${selectedCategory}`)
  .then((data)=>{
    setVideos(data.items)
    return data.items;
  })
  // try to fetch channel details to put channel logo before title 
  .then((videos)=>{
    videos.map((item)=>{
      setChannelId(item.snippet.channelId)
      return item.snippet.channelId;
    })})
},[selectedCategory])




  return (
    <Stack sx={{ flexDirection: {sx: 'column', md: 'row'} }}>

      {/* Sidebar feed  */}
      <Box sx={{ height: {sx: 'auto', md: '92vh'},
       borderRight: '1px solid #3d3d3d', px:{ sx: 0, md: 2 } }}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright'
          variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 Xenon Media
        </Typography>
      </Box>

      {/* video feed */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4'
          fontWeight="bold"
          mb={2} sx={{ color: 'white' }}
          > {selectedCategory}
          <span style={{ color: '#F31503' }}> videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
