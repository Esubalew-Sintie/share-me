import React, { useEffect} from 'react'
import { TopMovies ,backGroundImage} from '../Redux/states/State'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import PosterCard from './PosterCard'
 
const Main =  () => {
const filmTitle=  useSelector((state)=>state.Film.FilmTittle)
const dispatch=useDispatch()

const movies=   useSelector((state)=>state.Film.movies)
const movie=movies[Math.floor(Math.random()*20)]
dispatch(backGroundImage(movie))

const URL='https://api.themoviedb.org/3/discover'
const secondUrl='https://api.themoviedb.org/3/search'
const key=filmTitle?secondUrl:URL
useEffect(()=>{
axios.get(`${key}/movie`,{
  params:{
  api_key:'f11d4bc738b22af4b21176c76744f40e',
  query:`${filmTitle}`
  }

})
.then((result)=>dispatch(
  TopMovies(result.data.results))

  )
.catch((err)=>{
    console.log(err)})
},[filmTitle])

//inside the path component i use ? thing why because during access object of movie may be the will be nested object so we use it in order to remove error
  return (
    <div className='overflow-hidden'>
    <div className='w-full h-[600px] text-white relative'>
      <div className='w-full h-full'>
         {movie&&<img className='w-full bg-center aspect-auto h-full object-cover' src={movie?.backdrop_path?`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`:'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F66d2d06a-628a-11ed-bd54-70403457622f.jpg?crop=2607%2C1738%2C0%2C0'} alt={movie?.title} /> }
      </div>
      <div className='flex flex-col justify-start align-middle absolute top-80 left-10 w-[70%] p-10 gap-5 bg-black sm:w-[50%]    bg-opacity-50'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl'>{movie?movie.original_title:null}</h1>
          <button className='bg-red-700 px-4 py-2 font-bold'>PLAY</button>
        </div>
        <p>{movie?movie.overview:null}</p>
      </div>
    </div>
    <div className='w-full flex items-center justify-center'>
      <PosterCard />
    </div>
    </div>
  )
}

export default Main
