import React from 'react'

import PropTypes from 'prop-types'

import './services-card.css'

const ServicesCard = (props) => {
  return (
    <div className={`services-card ${props.rootClassName} `}>
      <div className="services-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="services-card-image"
        />
      </div>
      <span className="services-card-text">{props.text}</span>
      <span className="services-card-text1">{props.text1}</span>
      <span className="services-card-text2">{props.text2}</span>
    </div>
  )
}

ServicesCard.defaultProps = {
  image_alt: 'image',
  image_src:
    '/playground_assets/general-motors-2021-new-logo-1024x1024-200h.png',
  text: 'Website design',
  rootClassName: '',
  text1:
    'Create your ubest unique App development, crafted for your business needs.',
  text2: 'Learn more',
}

ServicesCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ServicesCard
