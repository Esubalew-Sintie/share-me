import {BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
	const navigate=useNavigate()
	const [userLogin, setUserLogin] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [user, setUser] = useState(null);
	useEffect(() => {
		const user =
			localStorage.getItem("user") || localStorage.removeItem("user");
		// console.log(user);
		setUser(user);
		if (!user) {
			navigate('/login')
		}
	}, []);
        
	return (
		<div>
			<Provider store={store}>
				
					<Toaster />

					<Routes>
						{!user && (
							<Route
								path="/login"
								element={<Login user={userLogin} setUser={setUserLogin} />}
							/>
						)}{" "}
						{!user && (
							<Route
								path="/signup"
								element={<SignUp user={userLogin} setUser={setUserLogin} />}
							/>
						)}
						
						{
							<Route path="/*" element={user ? <Home user={user} /> : <Login user={userLogin} setUser={setUserLogin}  />} />
						}

					</Routes>
			</Provider>
		</div>
	);
}

export default App;
