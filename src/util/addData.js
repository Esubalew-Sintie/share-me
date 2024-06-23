import axios from "axios";
import {useEffect, useState} from "react";

const useAddData = (url, dataSent) => {
	const token = localStorage.getItem("token");
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.post(url, JSON.stringify(dataSent), {
					headers: {
						authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				});
				setData(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return data;
};

export default useAddData;
