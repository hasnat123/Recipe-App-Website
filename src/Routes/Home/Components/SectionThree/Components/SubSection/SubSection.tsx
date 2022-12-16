import React from 'react'
import { CustomAnimation } from '../../../../../../Helpers/Helpers'

export interface IProps
{
    subHeading: string
    heading: string
    paragraph: string
    image: string
    bottom: boolean
}

const SubSection: React.FC<IProps> = ({subHeading, heading, paragraph, image, bottom}) => {
  return (
    <div className={bottom ? 'sub-section bottom' : 'sub-section'}>
      <CustomAnimation children={
        <div className="text">
          <div className="sub-heading">{subHeading}</div>
          <h2 className="heading">{heading}</h2>
          <p>{paragraph}</p>
        </div>
      }/>

        <img src={image} alt="" />
    </div>
  )
}

export default SubSection