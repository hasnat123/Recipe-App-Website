import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { HandleScroll } from '../../Helpers/Helpers'

const LogoMobile = require('./../../Assets/Images/cover.png')

const Navbar: React.FC = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    const HandleToggle = (): void =>
    {
      setToggle(!toggle);
    }

  return (
    <nav className='navbar'>
        <div className="inner">
          <div className="logo">
            <img src={LogoMobile} alt="" />
          </div>
          <div className={toggle ? "nav-toggle open" : "nav-toggle"}>
              {toggle ? <FontAwesomeIcon onClick={HandleToggle} icon={faTimes} /> : <FontAwesomeIcon onClick={HandleToggle} icon={faBars} />} 
          </div>
          <ul className='nav-items'>
            <li data-scroll="section-two" onClick={HandleScroll}>About</li>
            <li data-scroll="section-two" onClick={HandleScroll}>Features</li>
            <li data-scroll="section-two" onClick={HandleScroll}>How to Use</li>
            <li data-scroll="section-two" onClick={HandleScroll}>Download</li>
          </ul>
        </div>


        <div className={toggle ? "nav-list-container open" : "nav-list-container"}>
          <div className='nav-list'>
            <ul>
              <li data-scroll="section-two" onClick={(e)=>{setToggle(false); HandleScroll(e);}}><span>About</span></li>
              <li data-scroll="#features" onClick={(e)=>{setToggle(false); HandleScroll(e);}}><span>Features</span></li>
              <li data-scroll="#how-to-use" onClick={(e)=>{setToggle(false); HandleScroll(e);}}><span>How to Use</span></li>
              <li data-scroll="#download" onClick={(e)=>{setToggle(false); HandleScroll(e);}}><span>Download</span></li>
            </ul>
          </div>
        </div>

    </nav>
  )
}

export default Navbar