import React from 'react'
import SubSection from './Components/SubSection/SubSection'
import SubSectionTwo from './Components/SubSectionTwo/SubSectionTwo'

const SectionThreeImage1 = require('./../../../../Assets/Images/SectionThreeImage1.png')
const SectionThreeImage2 = require('./../../../../Assets/Images/SectionThreeImage2.png')
const SectionThreeImage3 = require('./../../../../Assets/Images/SectionThreeImage3.png')
const SectionThreeImage4 = require('./../../../../Assets/Images/SectionThreeImage4.jpeg')
const SectionThreeImage5 = require('./../../../../Assets/Images/SectionThreeImage5.jpeg')

const SectionThree: React.FC<{bottom: boolean}> = ({bottom}) => {
  return (
    <div className='section section-three'>
        {(bottom) ?
          (
            <>
              <SubSection subHeading={"INTERNATIONAL CUISINE"} heading={"Recipes from around the world"} paragraph={"Alice has over 3 millions active users and as a result there is a huge range of different recipes to choose from. Each has its own unique style and ingredients, giving you the opportunity to learn of dishes you may have never before knew existed."} image={SectionThreeImage4} bottom={true}/>
              <SubSectionTwo subHeading={"A VARIETY OF OPTIONS"} heading={"Filter recipes by ingredients"} paragraph={"Get your recipes tailored to your preferences. If you have any additional dietary requirements, you can easily select the available options to let your chef know. Chefs can also provide the relevant tags to notify clients of the options available."} image={SectionThreeImage5} bottom={true}/>
            </>

          )
          :
          (
            <>
              <SubSection subHeading={"SIMPLISCTIC DESIGN"} heading={"Simplified user interface"} paragraph={"An easy-to-use user interface allowing you to post your recipes worldwide in an instant"} image={SectionThreeImage1} bottom={false}/>
              <SubSectionTwo subHeading={"DATA TRACKING"} heading={"Keep track of important data"} paragraph={"Make use of valuable sales data to understand what your business needs to be a success"} image={SectionThreeImage2} bottom={false}/>
              <SubSection subHeading={"Customise"} heading={"Personalise your profile"} paragraph={"Comes with a range of additional features to make your recipes stand out against the others"} image={SectionThreeImage3} bottom={false}/>
            </>

          )
        }
    </div>
  )
}

export default SectionThree