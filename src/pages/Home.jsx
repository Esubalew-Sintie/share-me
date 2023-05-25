import React, { useState } from 'react'
import SignIn from '../registration/SignUp'
const Home = () => {
    const [signIn,setSignIn]=useState(true)
    
  return (
    <div>
        <img src="https://i0.wp.com/www.nationalturk.com/en/wp-content/uploads/2022/05/netflix-codes.jpg" className='absolute w-full h-full opacity-40 ' alt='logo'/>
        <div className='absolute  w-full h-[100vh] bg-gradient-to-r from-black opacity-70'> </div>
       
     <div className='relative w-full flex justify-between items-center'>
       <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"  className="w-[150px] ml-[40px] mt-[30px] cursor-pointer z-30" alt='logo'/>
     <button className='mr-[40px] mt-[30px] px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-950   transition-[0.5s] border-none z-30' onClick={()=>setSignIn(!signIn)}>Sign In</button>
     
     </div>
  {!signIn?<SignIn/>:(
       <div className='flex items-center justify-center absolute top-0  w-full h-[100vh]'>
       <div className='text-white z-10 text-center'>
          <h1 className='text-[40px] font-bold px-20'>Ultimate films, tv programs and more.</h1>
          <h2 className='text-[25px] font-bold px-20'>Watch any where. cancel any time.</h2>
         <h3 className='px-20 py-[20px]'>Ready to Watch? Enter your email to create or restart your member ship</h3>
         <div>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="email" disabled className='px-2 py-2 w-[40%] outline-none bg-white text-red-600 font-bold' placeholder='email Address...'  />
                <button className='bg-red-600 px-4 py-2' onClick={()=>setSignIn(false)} >Get Started</button>
            </form>
         </div>
       </div>
       </div>
  )}
    </div>
  )
}

export default Home

