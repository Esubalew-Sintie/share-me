import { Routes ,Route} from "react-router-dom";
import NavBar from "./component/NavBar";

import PlayFilm from "./pages/PlayFilm";
import Main from "./component/Main";
 
 function App() {
  return (
    <>
     <NavBar/>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path='/play/:id' element={<PlayFilm/>}/>
    </Routes>
    
    </>
  );
}

export default App;
