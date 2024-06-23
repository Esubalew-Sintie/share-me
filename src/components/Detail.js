import  {useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AiOutlineDownload } from 'react-icons/ai'
import useFetchData from '../util/fetchData'
import axios from 'axios'
import Comment from './Comment'
import pro from '../assets/user.png'


function Detail({user}) {
    const { itemId } = useParams()
    // const [item, setItem] = useState([])
    const [comment, setCommented] = useState('')
	const [data, setData] = useState([]);

    const comments=   useFetchData(`http://localhost:5000/api/v1/comments/${itemId}`,[data,itemId]).comments
    const item = useFetchData(
        `http://localhost:5000/api/v1/products/${itemId}`, [itemId, data]).product
    const token = localStorage.getItem("token");
    console.log(item, 'poit');
 
    const postedByUser=useFetchData(`http://localhost:5000/api/v1/user/${item?.postedBy}`,[]).user
    console.log(postedByUser,'posted by user');
    const fetchData = async (url, dataSent) => {
        try {
            const res = await axios.post(url, JSON.stringify(dataSent), {
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const comm = fetchData('http://localhost:5000/api/v1/comments/', {
            comment,
            postId: itemId,
            postedBy:user.id
        })
      setCommented('')
    }
  return (
      <div className='  flex flex-col  gap-4  mt-3 mb-11 mx-5   max-sm:w-full md:w-4/5 lg:w-4/6 '>
          <img src={item?.imgUrl} alt={item?.title} className='  rounded-2xl h-72 lg:80 ' />
          <div className=' mt-3 flex justify-between w-full  px-6 '>
          <a href={item?.imgUrl}  target="_blank" download className='rounded-full bg-slate-600 w-7 h-7 text-white flex justify-center items-center '><AiOutlineDownload /></a>
           <Link>Esubalew.com</Link>
          </div>
          <p className=' font-bold space-x-2 text-xl'>Cloth, Shoes</p>
          <Link to='/user-profile/4' className=" flex  items-center">
      <img src={pro} alt="user"  className='  w-12 rounded-full flex justify-center items-center bg-black mr-2 '/>
      <p className=" font-bold">{postedByUser?.name} <span className=" font-bold "></span> </p>
          </Link>
          <div>
              <h4>Comments</h4>
              {
                  comments?.map((comm,index) => (
                    <Comment key={index} comm={comm}/>
                  ))
             }
              <form onSubmit={handleSubmit} className=' flex justify-around'>
              <img src={pro} alt="user"  className=' w-8 h-8 rounded-full flex justify-center items-center bg-black mr-2 '/>
                  <input value={comment} onChange={(e)=>setCommented(e.target.value)} type="text" className='bg-slate-300 w-3/4 rounded-lg text-black' placeholder=' add a comment' />
                  <button onClick={handleSubmit} type='submit' className=' bg-red-600 rounded-xl px-3 py-1 ml-3'>Comment</button>
              </form>
          </div>
    </div>
  )
}

export default Detail