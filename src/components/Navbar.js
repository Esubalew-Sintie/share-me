import { Link } from "react-router-dom"
import {AiOutlinePlus} from 'react-icons/ai'
import SearchInput from "./SearchInput"
import logo from '../assets/user.png'
const Navbar = ({setSearchTerm,user}) => {
  return (
    <div className=" flex w-full h-16 justify-between items-center px-3">
      <SearchInput setSearchTerm={ setSearchTerm} />
      <Link to={`/user-profile/${user.id}`}>
      <img src={logo} alt="user"  className=' max-sm:hidden w-12 rounded-full mr-3 flex justify-center items-center bg-black '/>
      </Link>
      <Link to='/create-post' className=" w-10 h-10 bg-black px-3 flex justify-center items-center rounded-md">
        <AiOutlinePlus color="white" size={24} className=" font-bold text-white"/>
      </Link>
    </div>
  )
}

export default Navbar