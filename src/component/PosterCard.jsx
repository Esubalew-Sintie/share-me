import React from 'react'
import {useSelector } from 'react-redux'
const PosterCard = () => { 
  const movies=useSelector((state)=>state.Film.movies)
  return (
  
    <div className='flex items-center justify-center flex-wrap py-10 sm:flex-row flex-col w-[100%]'>
        {
    movies.map((movie)=>( 
       <div className='p-1 hover:scale-y-125 hover:scale-x-110 hover:z-10 transition duration-300' key={movie.id}>
          <img  className=' object-cover overflow-hidden w-[600px] sm:w-[350px] m-auto h-[350px] '  src={movie?.poster_path?`https://image.tmdb.org/t/p/original${movie?.poster_path}`:'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F66d2d06a-628a-11ed-bd54-70403457622f.jpg?crop=2607%2C1738%2C0%2C0'} alt={movie?.title}/>
       </div>
    )
    )
    }
    </div>
  )
}

export default PosterCard
