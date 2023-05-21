import React, { useEffect} from 'react'
// import requests from '../Request'
import { TopMovies } from '../Redux/states/State'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import PosterCard from './PosterCard'


const Main = () => {
const movies=useSelector((state)=>state.Film.movies)
const dispach=useDispatch()
const movie=movies[Math.floor(Math.random()*20)]
const URL='https://api.themoviedb.org/3/discover'
const secondUrl='https://api.themoviedb.org/3/search'
useEffect(()=>{
axios.get(`${URL}/movie`,{
  params:{
  api_key:'f11d4bc738b22af4b21176c76744f40e'
  }
})
.then((result)=>dispach(
  TopMovies(result.data.results))

  )
.catch((err)=>{
    console.log(err)})
},[])

//inside the path component i use ? thing why becouse during access object of movie may be the will be nested object so we use it in order to renove error
  return (
    <div>
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
         {movie&&<img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} /> }
      </div>
    </div>
    <div className='w-full flex items-center justify-center'>
     {movies && <PosterCard />}
    </div>
    </div>
  )
}

export default Main
