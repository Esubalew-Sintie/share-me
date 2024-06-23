import React, { useState} from "react";
import {
	AiFillCheckCircle,
	AiFillCloseCircle,
	AiOutlineCloudDownload,
} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-hot-toast";
import {useDispatch, } from "react-redux";
import { addPost } from "../store/postSlice";
const links = ["cloth", "shoes", "electeronics", "watch", "camera", "belt"];

function CreatePost({user}) {
	const [category, setCategory] = useState("default");
	const dispatch = useDispatch();
  const token = localStorage.getItem("token");
	
	const schema = yup.object().shape({
		title: yup.string().required(),
		desc: yup.string().required(),
		imgUrl: yup.string().required(),
		category: yup.string().required(),
	});
	const {
		handleSubmit,
		register,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		dispatch(
			addPost({
				authorization: `Bearer ${token}`,
				url: "http://localhost:5000/api/v1/products/",
				post: {...data, postedBy: user.id},
			})
		);
		toast.success('post successfully created !!', {
			style: {
				height: "50%",
			},
		});
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=" flex justify-center flex-col gap-5 pl-5"
		>
			<label
				htmlFor="upload"
				className="w-3/4 flex relative  justify-center mt-4 bg-slate-400 rounded-md"
			>
				<div className=" z-0 shadow-lg w-full m-2 bg-slate-400 border-2 border-gray-500 flex justify-center h-60">
					<div className=" flex flex-col  justify-evenly z-10 ">
						<p className=" flex flex-col justify-center items-center">
							<AiOutlineCloudDownload size={24} /> Click to Upload
						</p>
						<p>Use high quality images</p>
					</div>
				</div>
			</label>
			<input
				type="file"
				name="upload"
				id="upload"
				className=" bg-yellow-300   bottom-0 left-0 h-0 w-0 z-20 "
			/>
			<div className=" flex flex-col gap-5">
				<div className=" relative flex rounded-lg  w-3/4 px-3 ">
					<input
						{...register("title")}
						type="text"
						placeholder="Add your title here"
						className=" rounded-lg  w-[100%] px-3 "
					/>
					{errors.title?.message ? (
						<AiFillCloseCircle className=" absolute right-5 top-1  text-red-700" />
					) : (
						<AiFillCheckCircle className=" absolute right-5 top-1  text-blue-700 " />
					)}
				</div>
				<Link to="/user-profile/4" className="  flex items-center w-32">
					<img
						src={user}
						alt="user"
						className=" w-12 rounded-full flex justify-center items-center bg-black mr-2 "
					/>
					<p className=" font-bold">
						Esubalew <span className=" font-bold "></span>{" "}
					</p>
				</Link>
				<div className=" relative flex rounded-lg  w-3/4 px-3 ">
					<input
						{...register("desc")}
						type="text"
						placeholder="What is your product about"
						className=" rounded-lg   w-[100%] px-3 "
					/>
					{errors.desc?.message ? (
						<AiFillCloseCircle className=" absolute right-5 top-1  text-red-700" />
					) : (
						<AiFillCheckCircle className=" absolute right-5 top-1  text-blue-700 " />
					)}
				</div>
				<div className=" relative flex rounded-lg  w-3/4 px-3 ">
					<input
						type="text"
						{...register("imgUrl")}
						placeholder="Add a distination Link"
						className=" rounded-lg   w-[100%] px-3 "
					/>
					{errors.imgUrl?.message ? (
						<AiFillCloseCircle className=" absolute right-5 top-1  text-red-700" />
					) : (
						<AiFillCheckCircle className=" absolute right-5 top-1  text-blue-700 " />
					)}
				</div>
				<label htmlFor="catagory" className=" font-bold">
					Choose pin category
				</label>
				<select
					{...register("category")}
					onChange={(e) => setCategory(e.target.value)}
					className=" w-1/4"
				>
					<option value="other">Other</option>
					{links.map((link) => (
						<option value={link} key={link} className="  capitalize ">
							{link}
						</option>
					))}
				</select>
				<button
					type="submit"
					className=" bg-blue-500 w-20 ml-56 py-1 px-3 rounded-lg mr-20 mb-28"
				>
					Save
				</button>
			</div>
		</form>
	);
}

export default CreatePost;
