import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import items from '../constants'
import Pin from './Pin'
let isSearched = false
function Search({ searchTerm }) {
    const navigate=useNavigate()
    const [product, setProduct] = useState([])
    useEffect(() => {
        if (searchTerm?.length > 0 ) {
            setProduct(items.filter(item => item.name.includes(searchTerm)))
            console.log(product);
          
        } else {
            setProduct(items)
        }
    },[searchTerm])
  return (
      <div className=' w-full ml-3 -mt-4 flex'>
         
          <div className=' w-full  shadow-2xl rounded-b-xl mt-4 border-2'>
          {
              searchTerm.length > 0 && <div>
                  {
                      product?.length > 0 ? <div className=' flex flex-col'>
                          {
                              product.map(product =>
                                  <Link to={`/detial/${product.id}`} className=' border-b-2  hover:bg-slate-400 list-none pl-7'>
                          {
                              product.name
                          }
                              </Link>)
                          }
                    </div> : <div>
                              there is no item with this query
                      </div>
                  }
            </div>  
          }
          {
              searchTerm.length==0 && <Pin product={product} setProduct={setProduct}/>
          }
          </div>
          <div className=' w-36 '>
              
          </div>
    </div>
  )
}

export default Search