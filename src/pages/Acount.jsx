import React, { useEffect, useState } from 'react'
import {onSnapshot,doc} from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { db } from './Firebase' 
import { useNavigate } from 'react-router-dom'
import AccountPosterCard from '../component/AcountPostCard'
const Acount = () => {
  const navigate = useNavigate();
const email=useSelector((state)=>state.user.user.email)
const [movieList,setMovieList]=useState(null)
useEffect(()=>{
onSnapshot(doc(db,'user',email),(doc)=>{
try{
  setMovieList(doc.data().savedFilms)
}catch(err){
alert('there is no saved movie list please try again later');
navigate('/')
}
})
},[email])
  return (
    <div className='text-white flex flex-wrap items-center justify-center'>
      {movieList&&(movieList.map((movie)=>(
      <AccountPosterCard key={movie.id} movieList={movieList}  movie={movie.movie
      }/>
      )))}
    </div>
  )
}

export default Acount
