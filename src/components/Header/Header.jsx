import React, { useState } from 'react'
import {Link} from "react-router-dom"
import user from "../../avatar.png"
import {useDispatch} from "react-redux";
import "./Header.scss";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';
const Header = () => {
  const [search,setsearch] = useState("");
  const dispatch = useDispatch();
  const SubmitHandler = (e)=>{
   e.preventDefault();
   if(search==="") alert("Enter the correct search term")
   else{
   dispatch(fetchAsyncMovies(search));
   dispatch(fetchAsyncShows(search));
   setsearch("");
   }
   console.warn(search);
  };
  return (
    <div className='header'>
        <Link to="/">
        <div className='logo'>🌊 MovieSea </div>
        </Link>
        <div className='search-box'>
          <form onSubmit={SubmitHandler}>
            <input type="text" value={search} placeholder="Search Shows/Movies" onChange={(e)=>setsearch(e.target.value)}/>
            <button type="submit"><i className="fa fa-search"/></button>
          </form>
        </div>
        <div className='user-image'>
        <img src={user} alt="user"/>
        </div>
    </div>
  )
}

export default Header;