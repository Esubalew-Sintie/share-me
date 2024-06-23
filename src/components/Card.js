import {useEffect, useState} from "react";

import glass from "../assets/ac2.jpg";
import {
	AiFillDelete,
	AiFillHeart,
	AiOutlineCloudDownload,
	AiOutlineHeart,
	AiOutlineRight,
} from "react-icons/ai";
import {Link} from "react-router-dom";
import { useSelector} from "react-redux";
import axios from "axios";
import useFetchData from "../util/fetchData";
const Card = ({item, user}) => {
	const {id, title: name, imgUrl: img,postedBy} = item;
	const [toggle, setToggle] = useState(false);
	const [likes, setLikes] = useState([]);
	const token = localStorage.getItem("token");
	const {postlikes} = useSelector((store) => store.like);
	const [isLiked,setIsLiked]=useState([])
    const removelikes = async (postId) => {
        try {
            const res = await axios.delete(
                `http://localhost:5000/api/v1/likes/${postId}`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
           console.log( res.data.like.id);
           setIsLiked( likes.filter((like) => like.postedBy === user.id));

            setLikes(likes.filter(like => like.id === res.data.like.id));
        } catch (error) {
            console.log(error);
        }
    };
    const addlikes = async (postId) => {
        try {
            const res = await axios.post(
                `http://localhost:5000/api/v1/likes/`,
                JSON.stringify({postId, postedBy: user?.id}),
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setIsLiked( likes.filter((like) => like.postedBy === user.id));

        setLikes([...likes,res.data.like]);
        } catch (error) {
            console.log(error);
        }
        
    };    
    useEffect(() => {
        const fetchlikes = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/v1/likes/${id}`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
              
                setLikes(res.data.likes)
            } catch (error) {
                console.log(error);
            }
        };
        fetchlikes();
        setIsLiked( likes.filter((like) => like.postedBy === user.id));

	}, [postlikes,id]);
    const postedByUser=useFetchData(`http://localhost:5000/api/v1/user/${postedBy}`,[]).user
	return (
		<div  onMouseEnter={()=>{setToggle(true)}} onMouseLeave={()=>setToggle(false)} className=" bg-slate-700 relative flex-grow  w-60 h-80 rounded-md mt-6 ">
			<Link to={`/detial/${id}`}  >
				{" "}
				<img src={img} alt={name} className="w-full h-full rounded-md" />
			</Link>
			{toggle && (
                <a
                    href={`${img}?dl=`}
                    download
                    target="_blank"
					onClick={(e) => e.stopPropagation()}
					className=" hover:opacity-80 absolute left-2 top-2 w-7 h-7 rounded-full bg-white flex justify-center items-center "
				>
					<AiOutlineCloudDownload />
				</a>
			)}
			{
				  toggle &&
				<button
					onClick={(e) => {
						  e.stopPropagation()
						isLiked.length ? removelikes(isLiked[0]?.id) : addlikes(id);
					}}
					className=" hover:opacity-80 absolute right-2 top-2 w-19 px-2 h-13 rounded-md bg-white flex justify-center items-center "
				>
					{!isLiked.length ? <AiOutlineHeart size={23} /> : <AiFillHeart size={25} color="red" />}{" "}
					{likes.length>0 && likes.length }{" "}
				</button>
			}
            {toggle && (
                <Link to={`/user-profile/${postedBy}`} className=" hover:opacity-80 flex  absolute left-2 bottom-2">
				<button className="  w-7 h-7 rounded-full bg-white flex justify-center items-center ">
					<AiOutlineRight /> 
                </button>
                   <p className=" text-yellow-50 ml-2"> {user.email.slice(0,8)}...</p>
                    </Link>
			)}
			{/* {toggle && (
				<button className=" absolute right-2 bottom-2 w-7 h-7 rounded-full bg-white flex justify-center items-center ">
					<AiFillDelete />
				</button>
			)} */}
			<Link to="/user-profile/2" className=" flex justify-start items-center">
				<img
					src={glass}
					alt="profile"
					className="mr-3 w-7 h-7 rounded-full mt-2"
				/>
				<p> {postedByUser?.name}</p>
			</Link>
		</div>
	);
};

export default Card;
