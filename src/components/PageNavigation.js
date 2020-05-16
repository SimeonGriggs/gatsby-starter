import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'gatsby'

import Chevron from '../svg/chevron.svg'

const PageNavigation = ({type, previous, next}) => {
  if (!next && !previous) return null

  return (
    <section className='container mx-auto flex items-center justify-between'>
      {next && (
        <Link to={`/${type}/${next.slug.current}`} className='hover:text-yellow'>
          <Chevron className='mx-auto w-5 h-auto transform rotate-180' />
          {next.title}
        </Link>
      )}
      {previous && (
        <Link to={`/${type}/${previous.slug.current}`} className='hover:text-yellow'>
          {previous.title}
          <Chevron className='mx-auto w-5 h-auto' />
        </Link>
      )}
    </section>
  )
}

PageNavigation.propTypes = {
//   siteTitle: PropTypes.string
}

PageNavigation.defaultProps = {
//   siteTitle: ``
}

export default PageNavigation
