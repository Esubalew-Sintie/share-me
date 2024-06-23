import React, {useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import {useDispatch, useSelector} from 'react-redux'
import { getPosts } from '../store/postSlice'
import Spinner from './Spinner'
// import items from '../constants'

function Pin({ searchTerm,user }) {
    const dispach=useDispatch()
    const { categoryId } = useParams()
    const { posts, isLoading } = useSelector(store => store.post)

    const token = localStorage.getItem('token')
    useEffect(() => {
        if (searchTerm?.length > 0) {
         dispach(getPosts({authorization:`Bearer ${token}`,url:`http://localhost:5000/api/v1/products/?search=${searchTerm}`}))

        }
        else if (categoryId) {
          dispach(getPosts({authorization:`Bearer ${token}`,url:`http://localhost:5000/api/v1/products/?category=${categoryId}`}))

        }
        else {
          dispach(getPosts({ authorization: `Bearer ${token}`, url: `http://localhost:5000/api/v1/products/` }))
            

        }
        
       
    }, [categoryId, searchTerm,dispach])

    useEffect(()=>{
      window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          dispach(getPosts({authorization:`Bearer ${token}`,url:`http://localhost:5000/api/v1/products/`}))

       }
     }
    },[])
    if (isLoading) {
        return <Spinner message={'feching post data'}/>
    }
    
  return (
      <div className=' ml-6 -mt-2 mr-3 flex flex-wrap gap-5 justify-center  '>
          {  posts?.length>0 &&
              posts?.map(item => 
                <Card key={item?.id} item={item} user={ user} />  
              )
          }
          
          {
              posts.length < 1 && <div className=' flex justify-center items-center w-full h-60'>
                  There is no Product available
              </div>
   }
    
  </div>
  )
}

export default Pin