import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard, Sidebar } from './index'
import { fetchFromApi } from '../Utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos]= useState([])
  const [channelTitle, setChannelTitle] = useState('')
  

  const { id } = useParams();

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>{
        setChannelDetail(data?.items[0])
        return (data?.items[0])
      })
      .then((chData)=>{
        // console.log(chData.snippet.title)
        setChannelTitle(chData.snippet.title)
      })

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
        setVideos(data?.items)
    })
  },[id])
  
  // console.log(channelTitle);
  return (
    
    <Box minHeight='95vh'>
      <Box>
        <div style={{color: '#fff', backgroundImage: 'linear-gradient(to right, #870000, #190a05)', height: '300px', width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: "'Roboto', sans-serif", fontSize: '4rem', fontWeight: 'bolder', textShadow: '10px 10px 0 rgba(0,0,0,0.5)'}}>
          {channelTitle}
          
        </div>
        <ChannelCard channelDetail = {channelDetail} marginTop="-100px"/>

      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm: '100px'}}}/>
          <Videos videos={videos}/>
        

      </Box>
      
    </Box>
  )
}

export default ChannelDetail
