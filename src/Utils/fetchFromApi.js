import axios, { Axios } from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const rapidApiKey=import.meta.env.VITE_RAPID_API_YOUTUBE_KEY

const options = {
    
    params: {
        maxResults: '50',
        // order: 'date',
        regionCode: 'IN',
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromApi = async (url)=>{
       const { data }= await axios.get(`${BASE_URL}/${url}`, options);
      //  console.log(data);
       return data;
  }