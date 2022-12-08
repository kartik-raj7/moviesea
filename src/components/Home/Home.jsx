import React, { useEffect } from 'react'
import MovieList from '../Movielist/MovieList';
import MovieApi from "../../basic/api/MovieApi";
import {APIKey} from "../../basic/api/MovieApiKey"
import {useDispatch} from "react-redux"
import { addMovies,fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MovieSlice';
const Home = () => {
  const dispatch = useDispatch();
  const movie = "Avengers";
  const Show = "Friends";
  useEffect(()=>{

    // console.log("The Response From API",resp);
    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncShows(Show));
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