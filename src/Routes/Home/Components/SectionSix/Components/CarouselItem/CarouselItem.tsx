import React from 'react'


import SectionSixImage from './../../../../../../Assets/Images/SectionSixImage.svg'

const CarouselItem: React.FC<{comment: string, name: string, publisher: string}> = ({comment, name, publisher}) => {
  return (
    <div className="carousel-item">
        <img src={SectionSixImage} alt="" />
        <h3 className="comment">{comment}</h3>
        <div className="info">
            <p className="name">{name}</p>
            <span className="line"></span>
            <strong className="publisher">{publisher}</strong>
        </div>
    </div>
  )
}

export default CarouselItem