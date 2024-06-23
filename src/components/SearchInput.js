import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const Search = ({setSearchTerm}) => {
   const navigate= useNavigate()
  return (
      <div className=" w-11/12 mr-2 ">
          <form className=" relative">
              <AiOutlineSearch size={23} className=" absolute bottom-1 left-3"/>
              <input type="search" onChange={(e)=>{setSearchTerm(e.target.value)}} onFocus={()=>{navigate('/search')}}  className=" w-[90%] rounded-xl bg-white ml-3  pl-9 pr-3 py-1 "  placeholder="Search"  />
          </form>
    </div>
  )
}

export default Search