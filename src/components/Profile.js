import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../util/fetchData";

function Profile({ user }) {
	const navigate=useNavigate()
	const [active, setActive] = useState("post");
	const activeStyle =
		"bg-red-500 px-3 py-1 rounded-lg mr-3 hover:opacity-80 font-bold";
	const inActiveStyle =
		" border-2 px-3 py-1 rounded-lg border-gray-400 mr-6 font-bold";
	const clickHandler = (post) => {
		setActive(post);
  };
  const {userIdLink}=useParams()
// 	const sugestedUse = useFetchData(`http://localhost:5000/api/v1/followers/${user?.id}`, []).followers;
// 	console.log(follower);
//   if (sugestedUse) {
//     user = sugestedUse?.suggestedUser
    
//   }
	const data = useFetchData(`http://localhost:5000/api/v1/followers/${user?.id}`, []).followers;
	console.log(data);
	const follower = useFetchData(`http://localhost:5000/api/v1/followers/${user?.id}`, []).followers;
	const followin = useFetchData(`http://localhost:5000/api/v1/followers/${user?.id}`, []).following
	console.log(followin);
	const logOut = () => {
		localStorage.clear();
		navigate('/login')
	}
	return (
		<div className=" flex flex-col justify-center items-center w-full mt-7">
			<div className=" flex relative justify-center w-full ">
				<img
					src="http://localhost:5000/assets/12.jpg"
					alt="user"
					width={200}
					className=" w-48 h-48 rounded-full"
				/>
				<button onClick={logOut} className=" absolute top-1 right-6  rounded-md bg-red-500 px-3 py-1 hover:opacity-75 " type="button">Log Out</button>
			</div>
      <div className=" flex flex-col items-center">
			<div className=" flex my-6 border-b-2 pb-5 border-gray-400">
				<div className=" flex flex-col justify-center items-center font-bold">
					<p>{data?.length}</p>
					<button
						onClick={() => clickHandler("post")}
						className={active == "post" ? activeStyle : inActiveStyle}
					>
						Post
					</button>
        </div>
        
				<div className=" flex flex-col justify-center items-center font-bold">
					<p>{follower?.length}</p>
					<button
						onClick={() => clickHandler("follower")}
						className={active == "follower" ? activeStyle : inActiveStyle}
					>
						Followers
					</button>
				</div>
				<div className=" flex flex-col justify-center items-center font-bold">
					<p>{followin?.length}</p>
					<button
						onClick={() => clickHandler("following")}
						className={active == "following" ? activeStyle : inActiveStyle}
					>
						Following
					</button>
          </div>
        
          </div>  {
            // sugestedUse?.suggestedUser &&
            <button
						onClick={() => clickHandler("follow")}
						className=' bg-blue-500  px-3 font-bold hover:opacity-75 py-1 rounded-xl mb-6 text-center '
					>
						Follow
					</button>}
			</div>
			<div>
				{active === "post" && (
					<div className=" flex flex-wrap justify-center gap-6">
						{/* {loading && <Spinner />} */}
						{/* {error && <p>something went wrong</p>} */}
						{data &&
							data?.userPost?.map((post) => (
								<img src={post.imgUrl} alt={post.title} width={200} />
							))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Profile;
