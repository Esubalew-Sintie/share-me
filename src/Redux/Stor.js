import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./states/State";
import userSlice from './states/User'
 const Stor=configureStore({
reducer:{
Film:filmReducer,
user:userSlice
}
})
export default Stor