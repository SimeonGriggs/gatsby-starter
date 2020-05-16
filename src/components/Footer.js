import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({siteTitle}) => {
  return (
    <footer className='container mx-auto'>
      Footer
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ``
}

export default Footer
