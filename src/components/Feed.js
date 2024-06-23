import React, {useState} from "react";
import {Route, Routes, Link} from "react-router-dom";
import Detail from "./Detail";
import CreatePost from "./CreatePost";
import Navbar from "./Navbar";
import Pin from "./Pin";
import Profile from "./Profile";
const Feed = ({user}) => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className=" w-full  flex flex-col justify-center ">
			<Navbar setSearchTerm={setSearchTerm} user={user} />
			<Routes>
				<Route path="/" element={<Pin searchTerm={searchTerm} user={user} />} />
				<Route path="/category/:categoryId" element={<Pin user={user} />} />
				<Route path="/detial/:itemId" element={<Detail user={user} />} />
				<Route path="/user-profile/:userId" element={<Profile user={user} />} />
				<Route path="/create-post" element={<CreatePost user={user} />} />
				<Route
					path="/search"
					element={<Pin searchTerm={searchTerm} user={user} />}
				/>
				<Route
					path="*"
					element={
						<div className=" flex justify-center items-center flex-col h-60">
							<h2>some thing went wrong</h2>
							<Link
								to="/"
								className=" bg-blue-900 px-3 rounded-lg py-1 text-white hover:opacity-90 mt-4"
							>
								{" "}
								Back to Home
							</Link>
						</div>
					}
				/>
			</Routes>
		</div>
	);
};

export default Feed;
