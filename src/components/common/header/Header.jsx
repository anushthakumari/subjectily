import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import SearchIcon from '@mui/icons-material/Search';
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to='/courses'>All Courses</Link>
            </li> */}
            <li>
              <Link to='/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li> */}
           
           
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
             <li>
              <Link to='/assignment'>Assignment</Link>
            </li>
             <li>
              {/* <Link to='/pricing'>Pricing</Link> */}
             <SearchIcon color="#fff" />
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET ASSIGNMENT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
