import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

import SideBar from '../components/Sidebar'
import Feed from '../components/Feed'
import logo from '../assets/logo.png'
import profilePic from '../assets/user.png'

const Home = () => {
  const [toggleSideBar,setToggleSideBar]= useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  return (
    <div className='max-sm:flex-col flex  items-start '>
      <div className='   max-sm:hidden  h-screen  min-w-max w-52 max-md:w-48 max-xl:w-50 bg-gray-100  mr-9'>
        <SideBar />       
      </div>
      <div className=' flex justify-between w-full pl-3 pr-4 h-20  items-center shadow-md sm:hidden'>
        <div className='' onClick={()=>setToggleSideBar(true)}>
          <AiOutlineMenu size={25}  />
        </div>
        <div className=' h-11 '>
          <img src={logo} alt='logo' className=' flex justify-center items-center w-full h-full' />
        </div>
        <div>
          <img src={profilePic} alt="user"  className=' w-12 rounded-full flex justify-center items-center bg-black '/>
        </div>
      </div>
      {
        toggleSideBar && (
          <div className='  bg-gray-200 absolute top-0 bottom-0  sm:hidden z-10  pr-4'>
            <SideBar toggleSidbar={setToggleSideBar} />
          </div>
        )
      }
      <div className=' w-full flex'>
        <Routes>
        <Route path='/*' element={<Feed user={user} /> } />

        </Routes>
      </div>

    </div>
  )
}

export default Home