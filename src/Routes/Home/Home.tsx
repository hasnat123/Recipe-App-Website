import React from 'react'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import SectionFive from './Components/SectionFive/SectionFive'
import SectionFour from './Components/SectionFour/SectionFour'
import SectionSeven from './Components/SectionSeven/SectionSeven'
import SectionSix from './Components/SectionSix/SectionSix'
import SectionThree from './Components/SectionThree/SectionThree'
import SectionTwo from './Components/SectionTwo/SectionTwo'

const Home = () => {
  return (
    <div className='home-page'>
        <Hero/>
        <SectionTwo/>
        <SectionThree bottom={false}/>
        <SectionFour/>
        <SectionFive/>
        <SectionThree bottom={true}/>
        <SectionSix/>
        <SectionSeven/>
        <Footer/>
    </div>
  )
}

export default Home