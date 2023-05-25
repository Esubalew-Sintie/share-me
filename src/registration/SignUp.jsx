import React, { useRef, useState } from 'react'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import { auth ,Provider,db} from '../pages/Firebase'
import {setDoc,doc} from 'firebase/firestore'
const SignUp = () => {
   const [error,setError]=useState(null)
   const [haveAnAccount,setStatus]=useState(true) 
   const [loading,setLoading]=useState(false)
   const emailref=useRef(null)
   const passwordref=useRef(null)
   const HandleSignin=(e)=>{
   e.preventDefault()
   setLoading(true)
   signInWithEmailAndPassword(auth,
    emailref.current.value,
    passwordref.current.value
   ).then((authUser)=>{
    setError(null)
    setLoading(false)
     console.log(authUser)
   }).catch((error)=>{
    setError(error.message)
    setLoading(false)
   })
   }
   const Handlesignup=(e)=>{
  e.preventDefault()
  setLoading(true)
  const email=emailref.current.value;
  const password=passwordref.current.value
    createUserWithEmailAndPassword(auth,
      email,password
    ).then(()=>{
      setDoc(doc(db,'user',email),{
        savedFilms:[],
      })
        setError(null)
        setLoading(false)
        
    }).catch((error)=>{
        setError(error.message)
        setLoading(false)
    })
   }

   const SignInWithGoogle=async()=>{
    setError(null)
    try {
       await signInWithPopup(auth,Provider)
       
    }catch(error){
        setError(error.message)
    } 
   }
  return (
    <div className='z-20 absolute top-0  flex justify-center items-center w-full h-[100vh] '>
       
     {
        haveAnAccount?( <form className='max-w-[500px] text-center bg-black p-10 bg-opacity-50'>
            {error&&<p className='text-red-600'>{error}</p>} 
        <h1 className='text-white text-3xl font-serif pb-[10px]'>Sign In</h1>
        <input type="email" ref={emailref} placeholder='email...' required className='w-[300px] rounded-[5px] h-12 m-3 outline-none'/><br/>
        <input type="password"  ref={passwordref} required className='w-[300px] rounded-[5px] h-12 mb-3 outline-none' placeholder='password...' /><br/>
        <button className='bg-red-600 w-[300px] h-10 font-bold text-white text-[1rem] m-7 font-sans' onClick={(e)=>HandleSignin(e)}>{loading?"loading...":'SignIn'}</button>


        <button className='bg-blue-400 w-[300px] h-14 font-bold text-white text-[1rem] mt-2 ml-7 mb-2 font-sans flex items-center justify-around' onClick={(e)=>SignInWithGoogle(e)}>
            <img src='https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227' className='w-[40px] ' alt='logo'/>Sign In With Google
        </button>
        <h3 className='text-white text-[18px]'>New to Netflix ? <span className='text-red-600 hover:underline cursor-pointer'  onClick={()=>setStatus(!haveAnAccount)}> Sign Up now</span></h3>
      </form>)
        :
        ( <form className='max-w-[500px] text-center bg-black p-10 bg-opacity-50'>
            {error&&<p className='text-red-600'>{error}</p>} 
        <h1 className='text-white text-3xl font-serif pb-[10px]'>Sign Up</h1>
        <input type="email" ref={emailref} placeholder='email...' required className='w-[300px] rounded-[5px] h-12 m-3 outline-none'/><br/>
        <input type="password"  ref={passwordref} required className='w-[300px] rounded-[5px] h-12 mb-3 outline-none' placeholder='password...' /><br/>
        <button className='bg-red-600 w-[300px] h-10 font-bold text-white text-[1rem] m-7 font-sans' onClick={(e)=>Handlesignup(e)}>{loading?"loading...":"SignUp"}</button>
        <h3 className='text-white text-[18px]'>Already have an account: <span className='text-red-600 hover:underline cursor-pointer' onClick={()=>setStatus(!haveAnAccount)}>Sign In now</span></h3>
      </form>)
     }
    </div>
  )
}

export default SignUp
