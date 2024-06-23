import React, { useState } from 'react'
import Axios from 'axios'
 import Logo from '../assets/user.png'
import { useNavigate } from 'react-router-dom'
const SignUp = ({user, setUser}) => {
    const navigate=useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://127.0.0.1:5000/api/v1/signup',
            JSON.stringify({ ...user }),
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        ).then(res => {
            console.log(res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            navigate('/')
        }).catch(err =>{ console.log(err)})
    }
    const handleChange = (e) => { 
        const value = e.target.value
        const name=e.target.name
           setUser({...user,[name]:value})
    }

  return (
      <div className=' flex  flex-col items-center bg-slate-200  h-screen justify-center'>
          
          <form onSubmit={handleSubmit} className=' flex flex-col justify-center gap-5 pb-12 pt-7  w-1/2 items-center border-2  shadow-xl p-5  rounded-xl   bg-gray-100'>
          <div className=' flex justify-center items-center mb-5 w-36  h-36 rounded-full'>
              <img src={Logo} alt="logo" className=' w-36  h-36 rounded-full' />
          </div>
              <input type="text" value={user.name} name='name' onChange={handleChange} placeholder='Enter your Name' className=' border-2 border-gray-400 rounded-md px-3 w-3/4' />
              <input type="text" value={user.email} name='email' onChange={handleChange} placeholder='Enter your Email' className=' border-2 border-gray-400 rounded-md px-3 w-3/4' />
              <input type="text" value={user.password} name='password' onChange={handleChange}  placeholder='Enter your Password' className=' border-2 border-gray-400 rounded-md px-3 w-3/4'/>
              <div className=' flex justify-between w-3/4'>
              <button type="button" onClick={handleSubmit}  className=' bg-blue-600 w-20 py-1 rounded-md hover:opacity-80 '>Sign Up</button> 
                  <button type="button">
                      Already have an Account ? <span onClick={()=>navigate('/login')} className=' font-extrabold hover:opacity-80 hover:underline'>Login</span>
                  </button>
               </div>
          </form>
    </div>
  )
}

export default SignUp