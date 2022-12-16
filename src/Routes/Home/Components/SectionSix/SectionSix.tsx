import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomAnimation } from '../../../../Helpers/Helpers';
import CarouselItem from './Components/CarouselItem/CarouselItem';

import { CustomLeftArrow, CustomRightArrow } from './Components/CarouselItem/Components/CustomElements/CustomElements';

const SectionSix = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <div className='section section-six'>
      <CustomAnimation children={
        <Carousel className='carousel' responsive={responsive} swipeable={true} infinite={true} showDots={true} customLeftArrow={<CustomLeftArrow/>} customRightArrow={<CustomRightArrow/>}>
          <CarouselItem comment={"A game changer for home chefs looking to turn their hobby into an international business."} name={"Kevin Garcia"} publisher={"New York Times"}/>
          <CarouselItem comment={"Finding a great recipe suited to your liking couldn't get any easier. The UI looks great yet it's simple enough to be used by people of all ages."} name={"Stephanie Wallace"} publisher={"The Guardian"}/>
          <CarouselItem comment={"HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing"} name={"Joshua"} publisher={"New York Times"}/>
        </Carousel>
      }/>

    </div>
  )
}

export default SectionSix