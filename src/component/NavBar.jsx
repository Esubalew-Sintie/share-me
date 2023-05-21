import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-6 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      <div>
        <button className='text-white pr-4 font-medium '>Sign In</button>
        <button className='bg-red-600 px-4 py-2 rounded cursor-pointer text-white font-medium hover:opacity-70 transition-[0.5s]'>Sign Up</button> 
      </div>
    </div>
  )
}

export default NavBar
