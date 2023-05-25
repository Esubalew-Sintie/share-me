import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animation from '../component/Loading.json'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const PlayFilm = () => {
  const [selectedMovie,setSelectedMovie]=useState()
  
const {id}=useParams()
const renderTrailer=  ()=>{
  const trailer =  selectedMovie.videos
  .results[selectedMovie.videos
    .results.length-1]

  return(
    <div className='w-full h-[100vh] relative'>
   {trailer&& <YouTube
    videoId={trailer.key}
    containerClassName='youtube'
    opts={{
      width:'100%',
      height:'680px'
    }}
    />}
  </div>)
}
useEffect(()=>{

   axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
    params:{
      api_key:'f11d4bc738b22af4b21176c76744f40e',
      append_to_response:'videos'
    }
   })
   .then((data)=>{
    setSelectedMovie(data.data)
    
   })
   .catch((err)=>{
    console.log(err)
  
   })
  
  
},[id])

  return (
    <div className='w-full h-[99vh]'>
    {selectedMovie?.videos?renderTrailer():<div className=' flex items-center justify-center  w-full h-[100vh] '><Lottie animationData={animation}/></div>}
   
    </div>
  )
}

export default PlayFilm
