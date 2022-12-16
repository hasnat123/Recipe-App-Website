import React from 'react'

import { CustomAnimation } from '../../../../../../Helpers/Helpers'

import { IProps } from '../SubSection/SubSection'

const SubSectionTwo: React.FC<IProps> = ({subHeading, heading, paragraph, image, bottom}) => {
    return (
      <div className={bottom? 'sub-section sub-section-two bottom' : 'sub-section sub-section-two'}>
          <img src={image} alt="" />
          <CustomAnimation children={
          <div className="text">
            <div className="sub-heading">{subHeading}</div>
            <h2 className="heading">{heading}</h2>
            <p>{paragraph}</p>
          </div>
          }/>

      </div>
    )
  }

export default SubSectionTwo