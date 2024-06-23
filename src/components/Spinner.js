import React from 'react'
import {Circles} from 'react-loader-spinner'

function Spinner({message}) {
  return (
      <div className=' flex flex-col w-screen h-screen justify-center items-center'>
      <div className=' h-10'>
      <Circles width={50} height={50} /> 
          <p className=' mt-4'>{ message}</p>
          </div>
    </div>
  )
}

export default Spinner