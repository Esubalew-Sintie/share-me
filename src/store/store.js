import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import likeReducer from "./likeSlice";
const store = configureStore({
	reducer: {
		post: postReducer,
		like: likeReducer,
	},
});
export default store;
