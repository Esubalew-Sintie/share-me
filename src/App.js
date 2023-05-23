import { Routes ,Route, BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";

import PlayFilm from "./pages/PlayFilm";
import Main from "./component/Main";
import Home from "./pages/Home";
 
 function App() {
  const user=null
  return (
    <>
  <BrowserRouter>
  {!user?(
    <Home/>
  ):(<>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path='/play/:id' element={<PlayFilm/>}/>
    </Routes>
    </>
  )}
  
  </BrowserRouter>
    </>
  );
}

export default App;
