import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { FaRegHeart,FaHeart,FaPlay } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const PosterCard = () => { 
  const movies=   useSelector((state)=>state.Film.movies)
  const [like,setLike]=useState(false)
const handlePlayClick=()=>{
  setLike(true)
}
useEffect(()=>{
  AOS.init({duration:1000})
},[])

  return (
  
    <div className='flex items-center justify-center  flex-wrap py-4 sm:flex-row flex-col '>
        {
    movies.map((movie)=>( 
       <div className='p-1 group hover:scale-y-125:scale-x-110 relative hover:z-10 transition duration-300 ' data-aos='zoom-in'  key={movie.id}>
        <div>
        <img  className=' object-center overflow-hidden opacity-70  w-[350px] animation   m-auto h-[400px] '  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`||`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`||'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F66d2d06a-628a-11ed-bd54-70403457622f.jpg?crop=2607%2C1738%2C0%2C0'} alt={movie?.title}/>
       <div className='absolute w-[98%] bottom-0  flex invisible group-hover:visible items-center justify-around  bg-opacity-70 bg-black h-40 animation' data-aos='zoom-in'>
       <div className='w-72 flex   items-center justify-around'>
       <div className='text-white font-bold text-4xl  cursor-pointer' onClick={()=>handlePlayClick()}>
          {like?<FaHeart/>:<FaRegHeart/>}
        </div>
        <div className='text-red-600 font-bold text-4xl  cursor-pointer' >
        <Link to={`/play/${movie.id}`}>
        <FaPlay/>
        </Link>
        </div>
       </div>
       </div>
        </div>
       </div>
    )
    )
    }
    </div>
  )
}

export default PosterCard
