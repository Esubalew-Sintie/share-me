import React, { useEffect, useState} from 'react'
import { TopMovies ,backGroundImage} from '../Redux/states/State'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
import { searchByFilmTitle } from '../Redux/states/State'
import animation from './Loading.json'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import PosterCard from './PosterCard'
import { Link } from 'react-router-dom'
 
const Main =  () => {

const filmTitle=  useSelector((state)=>state.Film.FilmTittle)
const dispatch=useDispatch()
const [newfilmTitle,setFilmTitle]=useState('')
const movies=   useSelector((state)=>state.Film.movies)
const movie=movies[Math.floor(Math.random()*20)]

setTimeout(() => {
  dispatch(backGroundImage(movie))
}, 2000);

const URL='https://api.themoviedb.org/3/movie/upcoming'
const secondUrl='https://api.themoviedb.org/3/search/movie'
const key=filmTitle?secondUrl:URL
useEffect(()=>{
const movies=async()=>{
  await axios.get(`${key}`,{
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
}
movies()
},[filmTitle])

useEffect(()=>{
  AOS.init({duration:1000})
},[])

const handleFilmTitle=(e)=>{
 e.preventDefault()
 dispatch(searchByFilmTitle(newfilmTitle))
}

const truncate=(string,n)=>{
return string?.length>n?string.substr(0,n-1)+'...':string
}

//inside the path component i use ? thing why because during access object of movie may be there will be nested object so we use it in order to remove error
  return (
    <div className='overflow-hidden'>
     {movie?<div className='w-full h-[550px] animation text-white relative'>
        <div className='absolute z-10 w-full h-[550px] bg-gradient-to-r from-black'> </div>
         <img className='w-full animation  bg-center   h-full object-cover ' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`||`https://image.tmdb.org/t/p/original${movie?.poster_path}`||'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F66d2d06a-628a-11ed-bd54-70403457622f.jpg?crop=2607%2C1738%2C0%2C0'} alt={movie?.title} data-aos='zoom-in'/> 
         
     <div className='absolute top-64 w-full flex justify-center'>
        <form onSubmit={(e)=>handleFilmTitle(e)} className='z-20'>
          <input type="text"  className='
          placeholder-red-300 bg-transparent  text-gray-100 font-semibold border-red-900 border-b-4 border-l-2 outline-none  px-5 py-2  w-96 rounded-l-lg' placeholder='Search...' onChange={
            (e)=>{
             e.preventDefault()
            setFilmTitle(e.target.value)}}/>
          <button className='bg-red-600 px-4 py-3 bg-opacity-75 rounded-r-lg font-bold'>
            Search
          </button>
        </form>
     </div>
      <div className='flex z-20 flex-col justify-start align-middle absolute top-80 left-10 w-[70%] p-10 gap-5 sm:w-[50%]  '>
        <div className='flex items-center justify-between'>
          <h1 className='text-4xl text-red-600 truncate'>{movie?movie.original_title:null}</h1>
          <button className='bg-red-700 px-4 py-2 font-bold hover:text-black hover:bg-white transition duration-300 '>
            <Link to={`/play/${movie?.id}`}>PLAY</Link>
           
          </button>
        </div>
        <p>{truncate(`${movie.overview}`,200)}</p>
      </div>
      <div className='absolute bottom-0 z-10 w-full h-[100px] bg-gradient-to-t from-black'> </div>
    </div>:<div className='flex items-center justify-center w-full h-[100vh]'><Lottie animationData={animation}/></div>}
    <div className="flex flex-wrap items-center justify-center">
      {movies&&movies.map((movie)=><PosterCard movie={movie} key={movie.id}/>)}
    </div>
    </div>
  )
}

export default Main
