import React from 'react'

interface IProps
{
  number: string
  label: string
}

const Stat: React.FC<IProps> = ({number, label}) => {
  return (
    <div className="stat">
      <div className="number">{number}</div>
      <h4 className="label">{label}</h4>
  </div>
  )
}

export default Stat