import React from 'react'


import { CustomAnimation } from '../../../../Helpers/Helpers'


const SectionTwoImage = require('./../../../../Assets/Images/SectionTwoImage.png')

const SectionTwo: React.FC<{offsetY: number}> = ({offsetY}) => {

  return (
    <section className='section section-two' id='section-two'>
        <div className="section-two-inner">
          <CustomAnimation children={
            <div className="text">
              <span>THE ULTIMATE RECIPE APP</span>
              <h2>Find thousands of recipes or kick-start your own business</h2>
            </div>
          }/>
          <img src={SectionTwoImage} alt="" style={offsetY < 1021 ? {transform: `translateY(${-offsetY * 0.25}px)`} : {transform: `translateY(${-1020 * 0.25}px)`}}/>
        </div>
    </section>
  )
}

export default SectionTwo