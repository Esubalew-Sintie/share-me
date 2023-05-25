import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {FaTrash,FaPlay } from "react-icons/fa";
import {db} from '../pages/Firebase'
import {updateDoc,doc } from 'firebase/firestore'
import AOS from 'aos'
import 'aos/dist/aos.css'
 
import { Link } from 'react-router-dom';
const AccountPosterCard = ({movie,movieList}) => { 
  const userEmail=useSelector((state)=>state.user.user.email  )
const likeMovies=doc(db,'user',userEmail)

const handDeleteClick=async(id)=>{
try{
  const Remain=await movieList.filter((movies)=>movies.movie.id!==id
    )
 updateDoc(likeMovies,{
  savedFilms:Remain
 })
}
catch(err){
  alert(err.message)
}
}

useEffect(()=>{
  AOS.init({duration:1000})
},[])


  return (
  
<div key={movie.id} className='flex items-center justify-center  flex-wrap py-4 sm:flex-row flex-col group'>
       <div className='p-1 group-hover:scale-y-125 relative hover:z-10 transition duration-300 ' data-aos='zoom-in'>
        <div>
           <img  className=' object-center overflow-hidden opacity-70  w-[350px] animation   m-auto h-[400px] '  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`||`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`||'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F66d2d06a-628a-11ed-bd54-70403457622f.jpg?crop=2607%2C1738%2C0%2C0'} alt={movie?.title}/>
      <div className='absolute w-[100%] bottom-0  flex invisible        group-hover:visible items-center justify-around  bg-opacity-70 bg-black h-full animation' data-aos='zoom-in'>
<div className='w-72 flex   items-center justify-around'>
    <div className='text-white font-bold text-2xl'>
         <FaTrash  onClick={()=>handDeleteClick(movie.id)} className='text-red-600   cursor-pointer'/>
    </div>
    <div className='text-red-600 font-bold text-2xl' >
        <Link to={`/play/${movie.id}`}>
        <FaPlay className='  cursor-pointer'/>
        </Link>
    </div>
</div>
       </div>
</div>
       </div>
   

  
    </div>
  )
}

export default AccountPosterCard
