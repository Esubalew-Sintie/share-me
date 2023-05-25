import { Routes ,Route, BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import { auth } from "./pages/Firebase";
import PlayFilm from "./pages/PlayFilm";
import Main from "./component/Main";
import Home from "./pages/Home";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux"; 
import { LogIn ,LogOut,PhotoUrl} from "./Redux/states/User";
import UnProtected from "./pages/UnProtected";
import Acount from "./pages/Acount";

function App() {
  const user=useSelector((state)=>state.user.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
     if(userAuth){
      dispatch(LogIn({
        uid:userAuth.uid,
        email:userAuth.email
      })) 
      dispatch(PhotoUrl(userAuth?.photoURL
        ))
     }else{
      dispatch(LogOut())
     }
    })
    return unsubscribe
  },[])
  return (
    <>
  <BrowserRouter>
  {!user?(
    <Home/>
  ):(<>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={ <Main/> }/>
      <Route exact path='/play/:id' element={ <PlayFilm/> }/>
      <Route path="/account" element={<Acount/>}/>
      <Route path="/notExist" element={<UnProtected/>}/>
    </Routes>
    </>
  )}
  
  </BrowserRouter>
    </>
  );
}

export default App;
