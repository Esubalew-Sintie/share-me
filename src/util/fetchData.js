import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = (url,dep) => {
    const token = localStorage.getItem('token')
  const [data,setData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
           try {
            const res = await axios.get(url, {
                headers: {
                    authorization:`Bearer ${token}`,
                  "Content-Type": "application/json"
              }
            })
              setData( res.data)
           } catch (error) {
            console.log(error);
           }
        }
        fetchData()
     
    }, dep)
    return  data
}

export default useFetchData