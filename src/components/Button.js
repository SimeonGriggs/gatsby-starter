import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({text, to, className, href, download, target}) => {
  // Open in new window?
  const attributes = {}
  if (target === '_blank') {
    attributes['target'] = '_blank'
    attributes['rel'] = 'noopener'
  }

  if (href) {
    return (
      <a {...attributes} className={`button ${className || ''}`} href={href}>
        {text}
      </a>
    )
  } else {
    return (
      <Link className={`button ${className || ''}`} to={to}>
        {text}
      </Link>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
}

Button.defaultProps = {
  text: `Home`,
  to: `/`
}

export default Button
