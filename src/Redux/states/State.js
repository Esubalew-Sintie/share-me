import { createSlice } from "@reduxjs/toolkit";
const initialState={
   movies:[],
   FilmTittle:'',
}
const FilmSlice=createSlice({
   name:'FilmSlice',
   initialState,
   reducers:{
   TopMovies:(state,action)=>{
     state.movies=[...action.payload]
        },
   FilmTitle:((state,action)=>{
   state.FilmTittle=action.payload
   })
   }
 
})
export const  {TopMovies,FilmTitle}=FilmSlice.actions
export default FilmSlice.reducer