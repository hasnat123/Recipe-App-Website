import React from 'react'
import Navbar from '../../../../Components/Navbar/Navbar'

import { HandleScroll, CustomAnimation } from '../../../../Helpers/Helpers'

const HeroImage = require('./../../../../Assets/Images/HeroImage.png')


const Hero: React.FC = () => {

  return (
    <div className='hero'>
      <Navbar/>
        <CustomAnimation children={
          <div className="hero-inner">
            <div className="main">
                <h1 className='heading'>Meet Alice</h1>
                <p className="sub-heading">Your Personal Virtual Cooking Assitant</p>
                <a href="#" className="get-btn">Get the App</a>
            </div>
            <div className="hero-image">
              <img src={HeroImage} alt="" />
            </div>
            {/* <span id='arrow-down'><FontAwesomeIcon icon={faArrowDownLong}></FontAwesomeIcon></span> */}
            <div className="arrow-container" data-scroll="section-two" onClick={HandleScroll}>
              <span className="arrow"></span><span className="arrow"></span><span className="arrow"></span>
            </div>
          </div>
        }/>
    </div>
  )
}

export default Hero