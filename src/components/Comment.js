import React from "react";
import profil from '../assets/avatar.png'
import useFetchData from "../util/fetchData";

function Comment({ comm }) {
    // console.log(comm);
    const user=useFetchData(`http://localhost:5000/api/v1/user/${comm.postedBy}`,[]).user
    // console.log(user);
	return (
		<div className=" flex my-4">
			<img
				src={profil}
				alt="user"
				className=" w-7 h-7 rounded-full  flex justify-center items-center bg-black mr-2 "
			/>
			<div>
				<p className=" font-bold">
					{user?.name} <span className=" font-bold "></span>{" "}
				</p>
				<p>{comm.comment}</p>
			</div>
		</div>
	);
}

export default Comment;
