import React from 'react'
import {Link} from "react-router-dom"
import user from "../../avatar.png"
import "./Header.scss";
const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
        <div className='logo'>MovieSea</div>
        </Link>
        <div className='user-image'>
        <img src={user} alt="user"/>
        </div>
    </div>
  )
}

export default Header;