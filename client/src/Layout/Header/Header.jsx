import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa6";
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
        <div className='header1'>
            <div className='first'>
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h1 style={{"fontWeight":"bolder"}}>COURSE</h1>
            </div>
            <div className='links'>
                <Link to={"/"} style={{"textDecoration":"none", "color":"black"}}>HOME</Link>
                <Link to={"/add"} style={{"textDecoration":"none", "color":"black"}}>ADD</Link>
                <Link to={"/wishlist"} style={{"textDecoration":"none", "color":"black"}}>WISHLIST</Link>
                <Link style={{"textDecoration":"none", "color":"black"}}>ABOUT US</Link>
                <Link style={{"textDecoration":"none", "color":"black"}}>COURSES</Link>
                <Link style={{"textDecoration":"none", "color":"black"}}>NEWS</Link>
            </div>
            {/* <div className='phone'>
            <FaPhoneVolume style={{"color":"white"}}/>
            <p style={{"fontWeight":"bolder"}}>+43 4566 7788 2457</p>
            </div> */}
        </div>
    </div>
  )
}

export default Header