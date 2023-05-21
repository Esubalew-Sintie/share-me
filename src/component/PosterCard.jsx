import React from 'react'
import { useSelector } from 'react-redux'
const PosterCard = () => {
  const{movies}=useSelector((state)=>state.Film)
  return (
    
    <div className='flex items-center justify-center flex-wrap py-10 sm:flex-row flex-col w-[100%]'>
        {
    movies.map((movie)=>( 
       <div className='p-1' key={movie.id}>
          <img  className=' object-cover w-[95%] sm:w-[350px] m-auto '  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
       </div>
    )
    )
    }
    </div>
  )
}

export default PosterCard
