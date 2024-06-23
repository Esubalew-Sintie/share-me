import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLikes = createAsyncThunk('like/getLikes', async (payload,thunkApi) => {
   try {
    const res = await axios.get(payload.url, {
        headers: {
            authorization: payload.authorization,
            'Content-Type':'application/json'
            
        }
    })
    // console.log(res.data)
    return res.data
   } catch (error) {
    console.log(error);
   }
})
export const addLike = createAsyncThunk('like/addLike', async (payload,thunkApi) => {
    const like = await axios.post(payload.url, JSON.stringify(payload.like), {
        headers: {
            authorization:payload.authorization,
         "Content-Type":'application/json'
        }
    })
    // console.log(like.data);
    return like.data;
})
export const disLike = createAsyncThunk('like/disLike', async (payload,thunkApi) => {
    const like = await axios.delete(payload.url, {
        headers: {
            authorization:payload.authorization,
         "Content-Type":'application/json'
        }
    })
    // console.log(like.data);
    return like.data;
})
const initialState = {
    postlikes:[]
}
const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(disLike.pending, (state) => {
            
        }).addCase(disLike.fulfilled, (state, action) => { 
            console.log(action.payload.like,'getLikes');
           
            // state.likes=action.payload.likes
        }).addCase(disLike.rejected, (state, action) => { 

        }).addCase(addLike.pending, (state, action) => { 

        }).addCase(addLike.fulfilled, (state, action) => { 
            // console.log(action.payload.like);
            state.likes=action.payload.like
        }).addCase(addLike.rejected, (state, action) => { })
    }

    
})



export default likeSlice.reducer