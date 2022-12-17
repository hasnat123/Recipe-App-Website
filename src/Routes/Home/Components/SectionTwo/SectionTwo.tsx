import React, {useEffect, useState} from 'react'


import { CustomAnimation } from '../../../../Helpers/Helpers'


const SectionTwoImage = require('./../../../../Assets/Images/SectionTwoImage.png')

const SectionTwo: React.FC = () => {

  const [offsetY, setOffsetY] = useState(0);

  const HandleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() =>
  {
    window.addEventListener('scroll', HandleScroll);
    console.log(window.pageYOffset);
    return () => window.removeEventListener('scroll', HandleScroll);
  })

  return (
    <section className='section section-two' id='section-two'>
        <div className="section-two-inner">
          <CustomAnimation children={
            <div className="text">
              <span>THE ULTIMATE RECIPE APP</span>
              <h2>Find thousands of recipes or kick-start your own business</h2>
            </div>
          }/>
          <img src={SectionTwoImage} alt="" style={window.pageYOffset < 1021 ? {transform: `translateY(${-offsetY * 0.25}px)`} : {transform: `translateY(${-1020 * 0.25}px)`}}/>
        </div>
    </section>
  )
}

export default SectionTwo