import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { FaRegHeart,FaHeart,FaPlay } from "react-icons/fa";
import {db} from '../pages/Firebase'
import {updateDoc,doc, arrayUnion} from 'firebase/firestore'
import AOS from 'aos'
import 'aos/dist/aos.css'
 
import { Link } from 'react-router-dom';
const PosterCard = ({movie}) => { 
  const userEmail=useSelector((state)=>state.user.user.email  )
 
const [like,setLike]=useState(false)
const likeMovies=doc(db,'user',userEmail)
const handlelikeClick=async(movie)=>{
  setLike(!like)
 try{
  await updateDoc(likeMovies,{
    savedFilms:arrayUnion({
     movie:{
      id:movie.id,
      poster_path:movie.poster_path,
      backdrop_path:movie.backdrop_path,
   
     }
    })
  })
 }catch(err){
  alert('something went wrong please sign in and try again')
 }
}
useEffect(()=>{
  AOS.init({duration:1000})
},[])

const truncate=(string,n)=>{
  return string?.length>n?string.substr(0,n-1)+'...':string
  }
  return (
  
    <div className='flex items-center justify-center  flex-wrap py-4 sm:flex-row flex-col '>
       <div className='p-1 group hover:scale-y-125:scale-x-110 relative hover:z-10 transition duration-300 ' data-aos='zoom-in'>
        <div>
        <img  className=' object-center overflow-hidden opacity-70  w-[350px] animation   m-auto h-[400px] '  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`||`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`||'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F66d2d06a-628a-11ed-bd54-70403457622f.jpg?crop=2607%2C1738%2C0%2C0'} alt={movie?.title}/>
       <div className='absolute w-[100%] bottom-0  flex invisible group-hover:visible   bg-opacity-70 bg-black h-[100%] animation' data-aos='zoom-in'>
       <div>
       <div className='text-white absolute top-6 left-6  font-bold text-3xl  cursor-pointer'>
          {like?<FaHeart  onClick={()=>handlelikeClick(movie)}/>:<FaRegHeart  onClick={()=>handlelikeClick(movie)}  />}
        </div>
        <div className='text-red-600 flex flex-col items-center justify-center w-full h-[80%] absolute bottom-0 font-bold' >
        <Link to={`/play/${movie.id}`}>
        <FaPlay className='text-6xl hover:text-red-500 cursor-pointer'/>
        </Link>
        <p className='text-white p-10'>{movie.title}</p>
        <p className='p-5'>{truncate(`${movie.overview}`,150)}</p>
        </div>
       </div>
       </div>
        </div>
       </div>
   

  
    </div>
  )
}

export default PosterCard
