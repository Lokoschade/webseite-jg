import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='jg__features-container__feature'>
      <div className='jg__features-container__feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature