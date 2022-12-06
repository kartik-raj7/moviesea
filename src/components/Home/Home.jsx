import React, { useEffect } from 'react'
import MovieList from '../Movielist/MovieList';
import MovieApi from "../../basic/api/MovieApi";
import {APIKey} from "../../basic/api/MovieApiKey"
import {useDispatch} from "react-redux"
import { addMovies } from '../../features/movies/MovieSlice';
const Home = () => {
  const dispatch = useDispatch();
  const movie = "Guardians";
  useEffect(()=>{
    const FetchMovies = async() =>{
    const resp = await MovieApi.get(`?apiKey=${APIKey}&s=${movie}&type=movie`)
    .catch((err)=>{
        console.log("Wrong type",err)
    });
    dispatch(addMovies(resp.data));
    console.log("The Response From API",resp);
    };
    FetchMovies();
  },[]);
  return (
    <div>
      <div className='baner-image'>
  
      </div>
      <MovieList/>

    </div>
  )
}

export default Home;