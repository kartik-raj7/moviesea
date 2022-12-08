import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import MovieApi from "../../basic/api/MovieApi";
import {APIKey} from "../../basic/api/MovieApiKey";
import {useDispatch} from "react-redux"
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
async (search) =>{
    const resp = await MovieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)
    return resp.data;
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
async (search) =>{
    const resp = await MovieApi.get(`?apiKey=${APIKey}&s=${search}&type=series`)
    return resp.data;
});
export const fetchAsyncMSDetail = createAsyncThunk('movies/fetchAsyncMSDetail',
async (id) =>{
    const resp = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return resp.data;
});
const initialState={
    movies:{},
    shows:{},
    msdetail:{},
}

export const MovieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removalMS:(state) =>{
            state.msdetail = {};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: ()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state,{payload})=>{
            console.log("Fetched Sucessfully");
            return{...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state,{payload})=>{
            console.log("Fetched Sucessfully");
            return{...state,shows:payload};
        },
        [fetchAsyncMSDetail.fulfilled]: (state,{payload})=>{
            console.log("Fetched Sucessfully");
            return{...state,msdetail:payload};
        },
    },
});

export const {removalMS} = MovieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows = (state)=>state.movies.shows;
export const getSelectedMS = (state)=>state.movies.msdetail;
export default MovieSlice.reducer;