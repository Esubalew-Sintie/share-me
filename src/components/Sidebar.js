import { AiFillCloseCircle, AiFillHome } from "react-icons/ai"

import Logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom"
import user from '../assets/user.png'

const activeStyle = ' font-bold w-full pl-2  rounded-xl  rounded-r-sm capitalize  border-r-2 border-r-black mt-3 flex items-center '
const notActiveStyle = 'font-bold flex  text-gray-400 mt-3 items-center capitalize hover:bg-gray-500 hover:rounded-xl pl-3  '
const links = ['cloth', 'shoes', 'electeronics', "watch", "camera", "belt"]
const Sidebar = ({ toggleSidbar }) => {
  return (
    <div className="    shadow-2xl h-screen w-52 max-md:w-48 max-xl:w-50 bg-gray-100  fixed px-2 top-0 bottom-0 left-0 right-0 ">
      <img src={Logo} alt="logo" className=" my-5 h-8   " />
      <button type="button" className=" sm:hidden" onClick={() => toggleSidbar(false)}>
        <AiFillCloseCircle size={25} className=" absolute top-2 right-2" />
      </button>
      <NavLink to='/' onClick={()=> toggleSidbar && toggleSidbar(false)} className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
        <AiFillHome className=" mr-2" size={20} />
        Home
      </NavLink>
      <h3 className=" my-3">Discover Categories</h3>
      {
        links.map(link =>
          <NavLink key={link} onClick={()=>toggleSidbar && toggleSidbar(false)} to={`/category/${link}`} className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
            <span className=" w-8 h-8 rounded-full bg-slate-700 flex justify-center mr-3">r</span>
            {link}
          </NavLink>)
      }
      <Link to='/user-profile/4' className=" fixed bottom-3 flex justify-center items-center">
      <img src={user} alt="user"  className=' w-12 rounded-full flex justify-center items-center bg-black mr-2 '/>
      <p className=" font-bold">Esubalew <span className=" font-bold ">&gt;</span> </p>
      </Link>
    </div>
  )
}

export default Sidebar