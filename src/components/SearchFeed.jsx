import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './index'
import { fetchFromApi } from '../Utils/fetchFromApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos]= useState([]);
  // const [channelId, setChannelId]= useState([]);
  const {searchTerm} = useParams();
  console.log(`search: ${searchTerm}`)

useEffect(()=>{
  fetchFromApi(`search?part=snippet,id&q=${searchTerm}`)
  .then((data)=>{
    setVideos(data.items)
    return data.items;
  })
},[searchTerm])




  return (
    
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant='h4'
      fontWeight="bold"
      mb={2} sx={{ color: 'white' }}
      > Search results for
      <span style={{ color: '#F31503' }}> {searchTerm}</span> videos
    </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed
