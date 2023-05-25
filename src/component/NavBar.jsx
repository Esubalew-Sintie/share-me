import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { auth } from "../pages/Firebase"
import { signOut } from "firebase/auth"
import { LogOut } from "../Redux/states/User"
import { useSelector } from "react-redux"
const NavBar = () => {
  const userPhoto=useSelector((state)=>state.user.Photo)
  const dispatch=useDispatch()
const [showBlack,setBlack]=useState(false)
const handleShow=()=>{
  if(window.scrollY>100){
    setBlack(true)
  }else{
    setBlack(false)
  }
}
useEffect(()=>{
window.addEventListener('scroll',handleShow)
return ()=>window.removeEventListener('scroll',handleShow)
},[])

const HandleLogOut=(e)=>{
e.preventDefault()
signOut(auth)
dispatch(LogOut())
}
  return (
    <div >
    <div className={`flex items-center ease-in duration-300 justify-between py-4 px-6 z-[100] w-full fixed ${showBlack&&'bg-black' } bg-opacity-70  h-[80px]`}>
      <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="img" className="w-[150px] pl-10 "/></Link>
      <div className='flex items-center justify-center'>
       
        <div className="pr-10 flex items-center">
          <Link to='/account'>
          <img src={userPhoto?`${userPhoto}`:"https://www.pngall.com/wp-content/uploads/12/Avatar-Transparent.png"} alt="img"   className="w-12  rounded-[50%] cursor-pointer "/>
          </Link>
         <p className="text-red-600 font-bold cursor-pointer ml-2 px-2 py-1 rounded-lg border-red-700 border-4 " onClick={(e)=>HandleLogOut(e)}>Log Out</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar
