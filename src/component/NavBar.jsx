
import { Link } from "react-router-dom"
const NavBar = () => {

  return (
    <div className='flex items-center justify-between py-4 px-6 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'><Link to="/">NETFLIX</Link></h1>
      <div className='flex items-center justify-center'>
       
        <div>
        <button className=' text-white ease-in duration-300 pr-4 font-medium '>Sign In</button>
        <button className='bg-red-600 ease-in duration-300 px-4 py-2 rounded cursor-pointer text-white font-medium hover:opacity-70 transition-[0.5s]'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
