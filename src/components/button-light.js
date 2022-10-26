import React from 'react'

import PropTypes from 'prop-types'

import './button-light.css'

const ButtonLight = (props) => {
  return (
    <div className={`button-light-container ${props.rootClassName} `}>
      <button className="button-light-primary button-secondary button-lg button">
        {props.primary}
      </button>
    </div>
  )
}

ButtonLight.defaultProps = {
  primary: 'Explore the blog',
  rootClassName: '',
}

ButtonLight.propTypes = {
  primary: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ButtonLight
