import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRout = ({children}) => {
  const user=useSelector((state)=>state.user.user)
  if(user){
    return <Navigate to='/' />
  }else{
   return <Navigate to='/notExist'/>;
  }
 
}

export default ProtectedRout

