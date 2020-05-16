import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'gatsby'

import Chevron from '../svg/chevron.svg'

const Pagination = ({number, total, slug}) => {
  const prev = number - 1 > 0 ? number - 1 : false
  const next = number + 1 <= total ? number + 1 : false

  if (!prev && !next) return null

  return (
    <section className='container mx-auto flex justify-between items-center'>
      {prev && (
        <Link className='hover:text-yellow' to={prev > 1 ? `/${slug}/page/${prev}` : `/${slug}/`} >
          <Chevron className='mx-auto w-5 h-auto transform rotate-180' />
          Page {prev}
        </Link>
      )}
      {next && (
        <Link className='hover:text-yellow' to={`/${slug}/page/${next}`} >
          Page {next}
          <Chevron className='mx-auto w-5 h-auto' />
        </Link>
      )}
    </section>
  )
}

Pagination.propTypes = {
//   siteTitle: PropTypes.string
}

Pagination.defaultProps = {
//   siteTitle: ``
}

export default Pagination
