import React,{useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Slidebar ,Videos } from './'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const[selectedCategory,setSelectedCategory] = useState("New");
  const [videos,setVideos]= useState([]);
  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>setVideos(data.items))
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx: "column",md:"row"}}}>
        <Box sx={{ height: {sx: "auto",md:"92vh" },overflowY:"auto",borderRight:"1px solid #3d3d3d",px:{sx: 0, md: 2}}} >
            <Slidebar selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography className="copyrigth" variant="body2" sx={{mt:1.5, color:"#fff"}}>
                copyrigth 2022 love
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY: 'auto',height:"90vh",flex:2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
            {selectedCategory}<span style={{color: "#f31503"}}> Videos</span>
          </Typography>

          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed