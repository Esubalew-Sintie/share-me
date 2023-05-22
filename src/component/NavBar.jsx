import { useDispatch } from "react-redux"
import { searchByFilmTitle } from "../Redux/states/State"
import { useState } from "react"
const NavBar = () => {
 const [filmTitle,setFilmTitle]=useState('')
 const dispatch=useDispatch() 

 const handleSubmit=(e)=>{
e.preventDefault()
dispatch(searchByFilmTitle(filmTitle))
 }
  return (
    <div className='flex items-center justify-between py-4 px-6 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      <div className='flex items-center justify-center'>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text"  className='bg-red-600 bg-opacity-70 placeholder-red-300 text-gray-100 font-semibold border-b-red-900 outline-none px5 py-2 mr-5 w-96' placeholder='Search...' onChange={(e)=>{setFilmTitle(e.target.value)}}/>
          
        </form>
        <div>
        <button className='text-red-800 ease-in duration-300 pr-4 font-medium '>Sign In</button>
        <button className='bg-red-600 ease-in duration-300 px-4 py-2 rounded cursor-pointer text-white font-medium hover:opacity-70 transition-[0.5s]'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
