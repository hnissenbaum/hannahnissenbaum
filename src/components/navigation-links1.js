import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <span className="navigation-links1-text">{props.text1}</span>
      <Link to="/technical" className="navigation-links1-navlink1">
        {props.text2}
      </Link>
      <span className="navigation-links1-text1">{props.text3}</span>
      <span className="navigation-links1-text2">{props.text4}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'About',
  text3: 'Portfolio',
  text: 'Home',
  text2: 'Technical',
  text4: 'Blog',
  rootClassName: '',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1
