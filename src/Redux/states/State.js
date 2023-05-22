import { createSlice } from "@reduxjs/toolkit";
const initialState={
   movies:[],
   FilmTittle:'',
   bgFilm:{}
}
const FilmSlice=createSlice({
   name:'FilmSlice',
   initialState,
   reducers:{
   TopMovies:(state,action)=>{
     state.movies=[...action.payload]
        },
   searchByFilmTitle:((state,action)=>{
   state.FilmTittle=action.payload
   }),
   backGroundImage:((state,action)=>{
  state.bgFilm=action.payload
   })
   }
 
})
export const  {TopMovies,searchByFilmTitle,backGroundImage}=FilmSlice.actions
export default FilmSlice.reducer