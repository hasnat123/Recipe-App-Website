import React from 'react'
import Stat from './Components/Stat/Stat'

const SectionFive: React.FC = () => {
  return (
    <div className='section section-five'>
        <Stat number={"+3M"} label={"Active Users"}/>
        <Stat number={"25"} label={"Languages Supported"}/>
        <Stat number={"+50K"} label={"Unique Recipes"}/>
        <Stat number={"24H"} label={"Online Support"}/>
    </div>
  )
}

export default SectionFive