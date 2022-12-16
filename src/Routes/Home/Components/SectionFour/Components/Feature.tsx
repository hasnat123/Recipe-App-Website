import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IProps
{
    icon: IconDefinition
    heading: string
    paragraph: string
}

const Feature: React.FC<IProps> = ({icon, heading, paragraph}) => {
  return (
    <div className="feature">
        <FontAwesomeIcon className='icon' icon={icon}/>
        <h4 className="heading">
            {heading}
        </h4>
        <p>
            {paragraph}
        </p>
    </div>
  )
}

export default Feature