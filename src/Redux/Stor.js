import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./states/State";
 const Stor=configureStore({
reducer:{
Film:filmReducer
}
})
export default Stor