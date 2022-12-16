import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { CustomAnimation } from '../../../../Helpers/Helpers'

const Footer = () => {
  return (
    <footer>
      <CustomAnimation children={
        <div className="inner">
          <h2 className='heading'>Get updates from Alice</h2>
          <p className="sub-heading">New course alerts, discounts and free lessons</p>
          <div className="search">
            <input type="text" placeholder='Enter your email'/>
            <button type='submit'>Subscribe</button>
          </div>
        </div>
      }/>
      <div className="socials">
          <ul className="icon-list">
              <li className='icon'><FontAwesomeIcon icon={faTiktok} /></li>
              <li className='icon'><FontAwesomeIcon icon={faTwitter} /></li>
              <li className='icon'><FontAwesomeIcon icon={faInstagram} /></li>
              <li className='icon'><FontAwesomeIcon icon={faFacebook} /></li>
              <li className='icon'><FontAwesomeIcon icon={faYoutube} /></li>
          </ul>
          <span>Copyright © 2022 Alice All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer