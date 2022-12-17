import React from 'react'

import { CustomAnimation } from '../../../../Helpers/Helpers'
const SectionSevenImage1 = require('./../../../../Assets/Images/SectionSevenImage1.png')
const SectionSevenImage2 = require('./../../../../Assets/Images/SectionSevenImage2.jpeg')


const SectionSeven: React.FC<{offsetY: number}> = ({offsetY}) => {

  return (
    <div className='section-seven'>
        <img src={SectionSevenImage1} alt="features" className='features'/>
        <img src={SectionSevenImage2} alt="" style={offsetY < 6055 ? {transform: `translateY(0)`} : {transform: `translateY(${(offsetY - 6055) * 0.125}px)`}}/>
        <div className="strip">
          <CustomAnimation children={
            <div className="inner">
              <h2 className="heading">Ready to get started?</h2>
              <div className="buttons">
                <a href="#">Download Now</a>
                <a href="#">Get in Touch</a>
              </div>
            </div>
          }/>

        </div>
    </div>
  )
}

export default SectionSeven