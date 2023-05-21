import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'
const Main = () => {
const [movies,setMovies]=useState([])
const movie=movies[Math.floor(Math.random()*movies.length)]

useEffect(()=>{
axios.get(requests.requestPopular)
.then((result)=>setMovies(result.data.results))
},[])
//inside the path component i use ? thing why becouse during access object of movie may be the will be nested object so we use it in order to renove error
  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
    </div>
  )
}

export default Main
