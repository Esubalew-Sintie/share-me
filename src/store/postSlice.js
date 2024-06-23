import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
	"post/getPosts",
	async (payload, thunkApi) => {
		try {
			const resp = await axios.get(payload.url, {
				headers: {
					authorization: payload.authorization,
				},
			});
			return resp.data;
		} catch (error) {
			console.log(error);
		}
	}
);
export const addPost = createAsyncThunk(
	"post/addPost",
	async (payload, thunkApi) => {
		try {
			// console.log(payload.post,payload.url,payload.authorization);
			const resp = await axios.post(payload.url, JSON.stringify(payload.post), {
				headers: {
                    authorization: payload.authorization,
                    'Content-Type':'application/json'
				},
			});
			console.log(resp.data);
			return resp.data;
		} catch (error) {
			console.log(error);
		}
	}
);
const initialState = {
	posts: [],
	isLoading: false,
};
const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				// console.log(action.payload.products);
				state.posts = action?.payload?.products || [];
				state.isLoading = false;
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false;
			})
			.addCase(addPost.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(addPost.fulfilled, (state, action) => {
				console.log(action.payload.product);
				state.posts.push(action.payload.product);
				state.isLoading = false;
			})
			.addCase(addPost.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
	// extraReducers: (builder) => {
	//     builder.addCase(addPost.pending, (state, action) => {
	//         state.isLoading=true
	//     }).addCase(addPost.fulfilled, (state, action) => {
	//         state.posts.push(action.payload.product)
	//         state.isLoading=false
	//     }).addCase(addPost.rejected, (state, action) => {
	//        state.isLoading=false
	//     })
	// }
});
export const postActions = postSlice.actions;
export default postSlice.reducer;
