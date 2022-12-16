import React from 'react'
import Feature from './Components/Feature'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComments, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import SectionFourImage1 from './../../../../Assets/Images/SectionFourImage1.svg'
import SectionFourImage2 from './../../../../Assets/Images/SectionFourImage2.svg'
import SectionFourImage3 from './../../../../Assets/Images/SectionFourImage3.svg'


const SectionFour = () => {
  return (
    
    <div className='section section-four'>
        <Feature icon={faBell} heading={"Notifications"} paragraph={"Recieve updates on new and exisiting orders, and recipes from you favourite chefs"}/>
        <Feature icon={faComments} heading={"Instant Messaging"} paragraph={"Communicate with existing and potential customers to answer any queries"}/>
        <Feature icon={faChartSimple} heading={"Mobile Optimised"} paragraph={"Fully optimised to work across all of the latest mobile devices, tablets and desktops"}/>
    </div>
  )
}

export default SectionFour