import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
  
      <div className="left">
        <div className="item">
          <img src='/img/en.png' alt="eng"/>
          <KeyboardArrowDownIcon/>
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon/>
        </div>
        <div className="item">
          <Link className ="link"  to="/">Woman</Link>
        </div>
        <div className="item">
        <Link className ="link"  to="/">Men</Link>
        </div>
        <div className="item">
        <Link  className ="link" to="/">Children</Link>
        </div>
      </div>
      <div className="center">
      <Link className ="link" to="/">SHOPINI</Link>      </div>

      <div className="right">
      <div className="item">
          <Link className ="link"  to="/">Home Page</Link>
        </div>
        <div className="item">
        <Link className ="link"  to="/">About</Link>
        </div>
        <div className="item">
        <Link className ="link"  to="/">Contact</Link>
        </div>
        <div className="item">
        <Link className ="link"  to="/">Store</Link>
        </div>
        <div className="icons">
         <SearchIcon/>
         <FavoriteBorderOutlinedIcon/>
         <PersonOutlineOutlinedIcon/>
         <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>{0}</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar