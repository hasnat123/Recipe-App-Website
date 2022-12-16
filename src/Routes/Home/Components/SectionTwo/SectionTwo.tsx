import React from 'react'

import { CustomAnimation } from '../../../../Helpers/Helpers'


const SectionTwoImage = require('./../../../../Assets/Images/SectionTwoImage.png')

const SectionTwo: React.FC = () => {
  return (
    <section className='section section-two' id='section-two'>
        <div className="section-two-inner">
          <CustomAnimation children={
            <div className="text">
              <span>THE ULTIMATE RECIPE APP</span>
              <h2>Find thousands of recipes or kick-start your own business</h2>
            </div>
          }/>
          <img src={SectionTwoImage} alt="" />
        </div>
    </section>
  )
}

export default SectionTwo