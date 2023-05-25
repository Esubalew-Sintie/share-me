import { createSlice } from "@reduxjs/toolkit";
const initialState={
   user:null,
   Photo:null
}
const UserSlice=createSlice({
name:'FilmSlice',
initialState,
reducers:{
LogIn:(state,action)=>{
    state.user=action.payload
        },
LogOut:((state)=>{
    state.user=null
    }),
PhotoUrl:((state,action)=>{
  state.Photo=action.payload
})
    }
})
export const  {LogIn,LogOut,PhotoUrl}=UserSlice.actions
export default UserSlice.reducer