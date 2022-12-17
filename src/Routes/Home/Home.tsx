import React, {useEffect, useState} from 'react'

import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import SectionFive from './Components/SectionFive/SectionFive'
import SectionFour from './Components/SectionFour/SectionFour'
import SectionSeven from './Components/SectionSeven/SectionSeven'
import SectionSix from './Components/SectionSix/SectionSix'
import SectionThree from './Components/SectionThree/SectionThree'
import SectionTwo from './Components/SectionTwo/SectionTwo'

const Home = () => {

  const [offsetY, setOffsetY] = useState(0);

  const HandleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() =>
  {
    window.addEventListener('scroll', HandleScroll);
    console.log(window.pageYOffset);
    return () => window.removeEventListener('scroll', HandleScroll);
  })

  return (
    <div className='home-page'>
        <Hero/>
        <SectionTwo offsetY={offsetY}/>
        <SectionThree bottom={false}/>
        <SectionFour/>
        <SectionFive/>
        <SectionThree bottom={true}/>
        <SectionSix/>
        <SectionSeven offsetY={offsetY}/>
        <Footer/>
    </div>
  )
}

export default Home