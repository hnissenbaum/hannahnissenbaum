import React from 'react'

import PropTypes from 'prop-types'

import './button-red.css'

const ButtonRed = (props) => {
  return (
    <div className="button-red-container">
      <button className="button-red-primary button-primary button-lg button">
        {props.primary}
      </button>
    </div>
  )
}

ButtonRed.defaultProps = {
  primary: 'Contact',
}

ButtonRed.propTypes = {
  primary: PropTypes.string,
}

export default ButtonRed
