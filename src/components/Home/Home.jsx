import React, { useEffect } from 'react'
import MovieList from '../Movielist/MovieList';
import MovieApi from "../../basic/api/MovieApi";
import {APIKey} from "../../basic/api/MovieApiKey"
import {useDispatch} from "react-redux"
import { addMovies,fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MovieSlice';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    // console.log("The Response From API",resp);
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows())
  },[dispatch]);
  return (
    <div>
      <div className='baner-image'>
  
      </div>
      <MovieList/>

    </div>
  )
}

export default Home;