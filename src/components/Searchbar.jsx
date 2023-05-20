import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handelSubmit = (e)=>{
    e.preventDefault();
    // console.log(`searchTerm: ${searchTerm}`);

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('');
    }
  }

  return (
    <>
      <Paper
        component='form'
        onSubmit={handelSubmit}
        sx={{ borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            marginTop: {xs: '5px'},
            boxShadow: 'none',
            mr: { sm: 5 }, display: 'flex', overflow: 'hidden' }}
      >
        <input type="text"
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <IconButton type='submit'
            sx={{ p: '5px', color: 'red' }}>
                <SearchIcon />
        </IconButton>
      </Paper>
    </>
  )
}

export default Searchbar
